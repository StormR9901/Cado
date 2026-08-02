// netlify/functions/chat.js
// Server-side proxy to OpenRouter. The API key lives ONLY in the
// Netlify env var OPENROUTER_API_KEY — never in client-side JS.

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: "", error: "AI not configured" })
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Bad JSON" }) };
  }

  const { message, systemPrompt, history } = payload;
  if (!message || !message.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: "message required" }) };
  }

  const messages = [
    { role: "system", content: systemPrompt || "You are CORA, a Cambridge O Level exam coach." },
    ...(Array.isArray(history) ? history : []),
    { role: "user", content: message }
  ];

  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        // OpenRouter asks for these two for attribution; harmless to omit if unknown
        "HTTP-Referer": process.env.SITE_URL || "https://cado.example",
        "X-Title": "CADO CORA"
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "openai/gpt-oss-20b:free",
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error("OpenRouter error:", r.status, errText);
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: "", error: "AI request failed" })
      };
    }

    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || "";
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: reply })
    };
  } catch (err) {
    console.error("CORA chat function error:", err);
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: "", error: "AI request failed" })
    };
  }
};