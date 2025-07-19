// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import typescript from '@rollup/plugin-typescript'
import { createResolver } from "@nuxt/kit";
const resolver = createResolver(import.meta.url);
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
            ".prisma/client/index-browser":
            // https://vite.dev/config/shared-options.html#resolve-alias
            // When aliasing to file system paths, always use absolute paths.
                resolver.resolve("./node_modules/.prisma/client/index-browser.js"),
          },
        },
        // 3) On empêche Prisma d’être bundle côté client
        ssr: {
          external: ['@prisma/client'],
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