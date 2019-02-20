// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

const withCSS = require('@zeit/next-css')
module.exports = withCSS()