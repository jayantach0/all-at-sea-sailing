export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.3.5/tiny-slider.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'var(--color-primary)',
    height: '5px'
  },

  /**
   * Router
   */
  router: {
    linkActiveClass: 'is-active'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/aos', ssr: false },
    '~/plugins/vee-validate',
    '~/plugins/flatpickr',
    '~/plugins/slide-toggle',
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    'nuxt-dayjs-module'
  ],
  styleResources: {
    scss: ['~assets/scss/tools/*.scss', '~assets/scss/settings/*.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
