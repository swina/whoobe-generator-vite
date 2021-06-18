const { createVuePlugin } = require('vite-plugin-vue2');
//import config from './config.js'
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'

import project from './config.json'
var fonts = Array.isArray(project.fonts) ? project.fonts : project.fonts.split(',') //config.fonts
fonts.push ( 'Material Icons' )

module.exports = {
  plugins: [
    createVuePlugin(),
    ViteComponents({ deep:true }),
    ViteFonts({
      google: {
        families: fonts
      },
    }),
  ]
};
