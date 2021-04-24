module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pku',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2020级综合实践' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    //vendor:['element-ui']   //防止element-ui被打包多次
  },

  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],
  
  css: [
    'swiper/dist/css/swiper.css'
  ],

  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ]
}

