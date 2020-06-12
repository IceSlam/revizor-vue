module.exports = {
  pwa: {
    themeColor: '#DE3131',
    name: 'Ревизор МСП',
    msTileColor: '#fff',
    manifestOptions: {
      background_color: '#fff'
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/revisor-msp/'
    : '/'
  },

  css: {
    extract: false
  },

  publicPath: '/revisor-msp'
}
