const { createVuePlugin } = require('vite-plugin-vue2');
//import config from './config.js'
import ViteFonts from 'vite-plugin-fonts'
import project from './config.json'
var fonts = project.fonts //config.fonts
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
