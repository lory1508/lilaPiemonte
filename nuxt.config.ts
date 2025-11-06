import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@primevue/nuxt-module",
    "@nuxtjs/strapi",
  ],
  runtimeConfig: {
    strapiToken: process.env.NUXT_STRAPI_TOKEN || "",
    public: {
      apiUrl: process.env.NUXT_STRAPI_URL || "http://localhost:1337",
    },
  },
  strapi: {
    url: process.env.NUXT_STRAPI_URL || "http://localhost:1337",
    token: process.env.NUXT_STRAPI_TOKEN || undefined,
    prefix: "/api",
    admin: "/admin",
    version: "v5",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "system",
          cssLayer: false,
        },
      },
    },
  },
});
