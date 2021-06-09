const { createVuePlugin } = require('vite-plugin-vue2');
import config from './config.js'
import ViteFonts from 'vite-plugin-fonts'
var fonts = config.fonts
fonts.push ( 'Material Icons' )
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
