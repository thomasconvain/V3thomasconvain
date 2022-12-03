// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    }
  },

    css: ["@/assets/css/styles.css"],
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
      transpile: ['@headlessui/vue', '@heroicons/vue'],
    },

    app: {
      head: {
        charset: 'utf-8',
        title: 'Thomas Convain | Desarrollador',
        meta: [
          // <meta name="description" content="My amazing site">
          { name: 'viewport', content: 'width=device-width' },
          { name: 'description', content: "Desarrollador front-end en Santiago, Chile. Creo aplicaciones web simples e intuitivas. Me adapto a los usuarios y a la identidad de cada proyecto." }
        ],
        link: [
          // <link rel="stylesheet" href="https://myawesome-lib.css">
          { rel: 'icon', href: 'favicon.svg' }
        ],
      }
    }
  });
