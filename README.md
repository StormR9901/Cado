# CADO backend (optional)

**Note:** CORA on the website is now a **built-in study bot** (no API keys). This folder is only if you later want a separate OpenAI proxy — not required for normal use.

Keeps your **OpenAI API key on the server** in `OPENAI_API_KEY` — never in the browser.

## Setup

1. Install [Node.js](https://nodejs.org/) 18+.
2. From this folder:

```bash
cd server
npm install
copy .env.example .env
```

3. Edit `.env` and set `OPENAI_API_KEY=sk-...`
4. Start:

```bash
npm start
```

5. Open **http://localhost:3001** — the site and CORA API run together. CORA auto-detects the backend; no API key in the browser.

**Windows:** use `copy .env.example .env` instead of `cp`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Server + AI config status (no secrets) |
| POST | `/api/chat` | Chat with CORA (proxies to OpenAI) |

### POST `/api/chat` body

```json
{
  "message": "How does osmosis work?",
  "systemPrompt": "You are CORA…",
  "history": [{ "role": "user", "content": "Hi" }, { "role": "assistant", "content": "Hello!" }],
  "model": "gpt-4o-mini"
}
```

Response: `{ "reply": "…", "model": "gpt-4o-mini" }`

The website never asks for an API key. Students use CORA through this server only.

Optional: `CADETOS_API_SECRET` in `.env` locks `/api/*` to callers that send `X-CADO-Secret` (for scripts or proxies — not the public student UI).

## Production

- Set `CORS_ORIGIN` to your real site URL(s).
- Use HTTPS (reverse proxy: nginx, Caddy, Cloudflare).
- Set `CADETOS_API_SECRET` to a long random string and configure the same value in CORA settings (optional).
- Never commit `.env`.
