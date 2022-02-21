export default {
  target: 'static',

  head: {
    title: 'Юлия Ушакова - WoT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Юлия Ушакова - WoT' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/wot/fav.png' }
    ]
  },
  plugins: [
    { src: '@/plugins/carousel', ssr: false },
  ],
  components: true,
  css: ['@/assets/css/global.css'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'ru'
    }
  },
}
