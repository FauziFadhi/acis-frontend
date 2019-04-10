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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' }
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
    '~/assets/css/adminlte.min.css',
    'daterangepicker/daterangepicker.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/jquery.bracket.min.js', ssr:false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
