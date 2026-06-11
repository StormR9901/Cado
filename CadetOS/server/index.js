/**
 * CADO secure backend — CORA chat proxy
 * OpenAI API key stays in process.env only (never sent to the browser).
 */
require("dotenv").config({ path: require("path").join(__dirname, ".env") });

const path = require("path");
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const PORT = parseInt(process.env.PORT || "3001", 10);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_BASE = (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const API_SECRET = process.env.CADO_API_SECRET || process.env.CADETOS_API_SECRET || "";
const ROOT = path.join(__dirname, "..");

const corsList = (process.env.CORS_ORIGIN || "http://localhost:3001,http://127.0.0.1:3001")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

if (!OPENAI_API_KEY) {
  console.error("[CADO] Missing OPENAI_API_KEY. Copy server/.env.example to server/.env");
  process.exit(1);
}

const app = express();
app.set("trust proxy", process.env.TRUST_PROXY === "1" ? 1 : false);

app.disable("x-powered-by");

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (corsList.includes("*") || corsList.includes(origin)) return callback(null, true);
      return callback(new Error("CORS blocked for origin: " + origin));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "X-CADO-Secret"]
  })
);

app.use(express.json({ limit: "32kb" }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX || "40", 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please wait a few minutes." }
});

app.use("/api", apiLimiter);

function requireSecret(req, res, next) {
  if (!API_SECRET) return next();
  const header = req.headers["x-cado-secret"];
  if (header && header === API_SECRET) return next();
  const origin = req.headers.origin;
  if (origin && (corsList.includes("*") || corsList.includes(origin))) return next();
  return res.status(401).json({ error: "Unauthorized" });
}

app.get("/api/health", requireSecret, (_req, res) => {
  res.json({
    ok: true,
    service: "cado-cora",
    model: DEFAULT_MODEL,
    authRequired: !!API_SECRET,
    keyConfigured: !!OPENAI_API_KEY
  });
});

app.post("/api/chat", requireSecret, async (req, res) => {
  try {
    const body = req.body || {};
    const message = body.message;
    const systemPrompt = body.systemPrompt;
    const history = body.history;
    const model = body.model;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required" });
    }
    if (message.length > 8000) {
      return res.status(400).json({ error: "message too long" });
    }

    const messages = [];

    if (systemPrompt && typeof systemPrompt === "string") {
      messages.push({ role: "system", content: systemPrompt.slice(0, 16000) });
    }

    if (Array.isArray(history)) {
      const trimmed = history.slice(-20);
      for (const entry of trimmed) {
        if (!entry || !["user", "assistant"].includes(entry.role)) {
          return res.status(400).json({ error: "invalid history entry" });
        }
        if (typeof entry.content !== "string" || entry.content.length > 8000) {
          return res.status(400).json({ error: "invalid history content" });
        }
        messages.push({ role: entry.role, content: entry.content });
      }
    }

    messages.push({ role: "user", content: message });

    const modelName =
      typeof model === "string" && model.length > 0 && model.length <= 64
        ? model
        : DEFAULT_MODEL;

    const upstream = await fetch(OPENAI_BASE + "/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: modelName,
        messages,
        temperature: 0.7,
        max_tokens: 1200
      })
    });

    if (!upstream.ok) {
      const errBody = await upstream.text();
      console.error("[CADO] OpenAI error", upstream.status, errBody.slice(0, 300));
      return res.status(502).json({
        error: "AI provider error",
        status: upstream.status
      });
    }

    const data = await upstream.json();
    const reply =
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content
        ? data.choices[0].message.content.trim()
        : "";

    if (!reply) {
      return res.status(502).json({ error: "Empty reply from AI provider" });
    }

    res.json({ reply, model: modelName });
  } catch (err) {
    console.error("[CADO] /api/chat", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.use(express.static(ROOT, { index: "index.html" }));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(ROOT, "index.html"));
});

app.use((err, _req, res, next) => {
  if (err && err.message && err.message.startsWith("CORS")) {
    return res.status(403).json({ error: err.message });
  }
  next(err);
});

app.listen(PORT, () => {
  console.log("[CADO] http://localhost:" + PORT);
  console.log("[CADO] CORA API: POST /api/chat  |  Health: GET /api/health");
  if (API_SECRET) console.log("[CADO] API secret required (CADO_API_SECRET)");
});
