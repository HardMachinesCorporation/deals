// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import typescript from '@rollup/plugin-typescript'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/input.css'],
      vite: {
        plugins: [
          tailwindcss(),
          typescript({ tsconfig: './tsconfig.json',
            include: ['types/**/*.ts'] }),
        ],
        resolve: {
          alias: {
            // https://github.com/nuxt/nuxt/issues/24690#issuecomment-2254528534
            ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js"
          },
        },
        // 3) On empêche Prisma d’être bundle côté client
        ssr: {
          external: ['@prisma/client'],
        },
      },

      nitro: {
        externals: {
          // 4) On force Prisma dans le bundle serveur Nitro
          inline: ['@prisma/client'],
        },
      },
  supabase:{
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect:false,
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@prisma/nuxt'
  ],


})