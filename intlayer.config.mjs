import { Locales } from "intlayer";
import { syncJSON } from "@intlayer/sync-json-plugin";
import { config as loadEnv } from "dotenv";

// Load environment variables from .env
loadEnv();

/** @type {import('intlayer').IntlayerConfig} */
const config = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.SPANISH],
    defaultLocale: Locales.ENGLISH,
  },
  plugins: [
    syncJSON({
      source: ({ locale }) => `./src/i18n/${locale}.json`,
      format: "i18next",
    }),
  ],
  ai: {
    provider: "openai",
    model: "gpt-4o-mini",
    apiKey: process.env.OPENAI_API_KEY,
  },
};

export default config;
