import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
   ssr: false,

   head: {
      title: "TODO",
      htmlAttrs: {
         lang: "en",
      },
      meta: [
         { charset: "utf-8" },
         { name: "viewport", content: "width=device-width, initial-scale=1" },
         { hid: "description", name: "description", content: "A simple TODO app" },
         { name: "format-detection", content: "telephone=no" },
      ],
      link: [
         { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
   },

   css: [],

   styleResources: {
      scss: [
         './assets/scss/config/*.scss',
         './assets/scss/app.scss'
      ],
   },

   plugins: [],

   components: true,

   buildModules: [
      "@nuxt/typescript-build",
      "@nuxtjs/google-fonts",
      '@nuxtjs/style-resources',
   ],

   modules: [],

   build: {},

   googleFonts: {
      families: {
         Montserrat: [500, 600, 700],
         Raleway: [700],
         "Material+Icons": true,
         "Material+Icons+Outlined": true,
         "Material+Icons+Round": true,
         "Material+Icons+Sharp": true,
         "Material+Icons+Two+Tone": true,
      },
      display: "swap",
      useStylesheet: true,
   },
}

export default config
