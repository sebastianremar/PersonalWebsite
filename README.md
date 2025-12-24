# sebastianremar.com

My personal website. Portfolio, resume, contact info, that kind of stuff.

## Tech Stack

- Next.js
- Chakra UI v3
- react-i18next (English/Spanish)
- Intlayer (AI-powered auto-translation)
- Deployed on Vercel

## Running Locally

```bash
npm install
npm run dev
```

Create a `.env` file with:

```
NEXT_PUBLIC_CAL_URL=your-cal-url
NEXT_PUBLIC_EMAIL=your-email
NEXT_PUBLIC_GITHUB_URL=your-github
NEXT_PUBLIC_LINKEDIN_URL=your-linkedin
OPENAI_API_KEY=your-openai-key  # for auto-translation
```

## Auto-Translation

Translations are automatically synced when running `npm run dev`. To manually trigger:

```bash
npm run translate
```

Add/edit English text in `src/i18n/en.json` and Spanish translations will be generated automatically.

## Live

https://sebastianremar.com

## Schedule a 1:1

Click on link at about me, it will route you to a calendar where you can reserve a spot to chat with me!
