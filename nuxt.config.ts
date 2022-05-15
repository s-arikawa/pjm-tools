import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // コンポーネントの自動インポート設定
  // - ネストしたディレクトリにあるコンポーネントのPrefixなしで使えるようにした。
  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
})
