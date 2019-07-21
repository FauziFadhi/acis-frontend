import pkg from './package'

const webpack = require('webpack')
export default {
  mode: 'universal',

  router: {
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
      { rel: 'manifest', href: '/manifest.json' }
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
    '~/plugins/mixins/user.js',
    '~/plugins/axios.js',
    { src: '~/plugins/jquery.bracket.min.js', ssr: false },
    { src: '~/plugins/vue-select', ssr: false },
    { src: '~/plugins/imageupload.js', ssr: false },
    { src: '~/plugins/datepicker.js', ssr: false },
    { src: '~/plugins/ckeditor.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/toast'
  ],

  axios: {
    baseURL: 'https://acis-api.herokuapp.com/api'
  },

  auth: {
    strategies:{
      local: {
        endpoints: {
          login:{
            url: 'login', method: 'post', propertyName: 'access_token'
          },
          user: {
            url: 'me', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'logout', method: 'get'
          }
        }
      }
    }
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
