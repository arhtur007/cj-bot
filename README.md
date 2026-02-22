# CJ Bot

Forked from [NanoClaw](https://github.com/qwibitai/nanoclaw). Stripped down to a single purpose: a Telegram bot that translates between Chinese and Japanese in real time.

## What It Does

Send a message to the Telegram bot:
- **中文 → 日本語** (Chinese to Japanese)
- **日本語 → 繁體中文** (Japanese to Traditional Chinese)

That's it. No commands, no menus. Every message gets translated and replied instantly.

## Why Groq

Groq runs open-source LLMs (Llama 3.3 70B) on custom LPU hardware with extremely low latency. For a real-time translation bot, speed matters more than anything. Compared to other options:

- **Groq** — Free tier available, ~200ms inference, OpenAI-compatible API
- **OpenAI / Anthropic** — Higher quality but slower and paid-only
- **Local models** — No API costs but requires GPU hardware

Groq hits the sweet spot: fast enough for conversation flow, free to start, and the 70B model is more than capable for translation tasks.

## Quick Start

```bash
git clone https://github.com/your-username/cj-bot.git
cd cj-bot
npm install
cp .env.example .env
```

Edit `.env` with your credentials:

```
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
GROQ_API_KEY=your-groq-api-key
ALLOWED_TELEGRAM_IDS=your-telegram-user-id
```

Run:

```bash
npm run dev
```

## Getting Your Credentials

### Telegram Bot Token

1. Open Telegram, search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot`
3. Enter a display name for your bot (e.g. `CJ Translator`)
4. Enter a username for your bot (must end in `bot`, e.g. `cj_translator_bot`)
5. BotFather will reply with your **bot token**, looks like `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`
6. Copy the token into `.env` as `TELEGRAM_BOT_TOKEN`

### Groq API Key

1. Go to [console.groq.com](https://console.groq.com) and sign up (free)
2. In the left sidebar, click **API Keys**
3. Click **Create API Key**, give it a name
4. Copy the generated key (starts with `gsk_`) into `.env` as `GROQ_API_KEY`

### Allowed Telegram User IDs

Only whitelisted users can use the bot. To find your Telegram user ID:

1. Open Telegram, search for [@userinfobot](https://t.me/userinfobot)
2. Send any message — it will reply with your user ID (a number like `123456789`)
3. Copy the ID into `.env` as `ALLOWED_TELEGRAM_IDS`

Multiple user IDs can be comma-separated: `123,456,789`

## Security

- Only whitelisted Telegram user IDs can use the bot
- Messages sent before bot startup are ignored
- Prompt injection defenses built into the system prompt
- API keys stored in `.env` (excluded from git)

## License

MIT
