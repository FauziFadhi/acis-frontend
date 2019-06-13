import pkg from './package'

const webpack = require('webpack')
export default {
  mode: 'universal',

  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: '/js/jquery.js' },
      { src: '/js/bootstrap.bundle.min.js' },
      { src: '/js/adminlte.min.js' },
      { src: '/js/now-ui-kit.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'jquery-bracket/dist/jquery.bracket.min.css',
    '~/assets/font-awesome/css/font-awesome.min.css',
    'daterangepicker/daterangepicker.css',
    'select2/dist/css/select2.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/jquery.bracket.min.js', ssr: false },
    { src: '~/plugins/vue-select', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],

  axios: {

  },

  toast: {
    position: 'top-center',
    duration: 3000,
    className: ["font-weight-bold"],
    closeOnSwipe: true
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'bootstrap', 'axios'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        '_': 'lodash'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
