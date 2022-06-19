import 'dotenv'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Joshua Schmitt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Joshua Schmitt - Portfolio',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    "@nuxt/content",
  ],

  i18n: {
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
      },
      {
        code: 'uk',
        iso: 'uk-UK',
        file: 'uk.json',
      },
    ],
    defaultLocale: 'en',
  },

  sitemap: {
    hostname: 'https://jqshuv.xyz',
    gzip: true,
    exclude: ['/**/legal*', '/**/privacy*', '/**/impressum*'],
    path: '/sitemap.xml',
  },

  robots: {
    UserAgent: '*',
    Disallow: ['/**/legal*', '/**/privacy*', '/**/impressum*'],
    Sitemap: 'https://jqshuv.xyz/sitemap.xml',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
