const { createVuePlugin } = require('vite-plugin-vue2');

import ViteFonts from 'vite-plugin-fonts'
import config from './config.js'
var fonts = config.fonts.split('|')
fonts.push('Material+Icons')
module.exports = {
  plugins: [
    createVuePlugin(),
    ViteFonts({
      google: {
        families: fonts
      },
    })
  ],
};
