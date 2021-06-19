const { createVuePlugin } = require('vite-plugin-vue2');
import { defineConfig, loadEnv } from 'vite';
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'
import fetch from 'node-fetch'
process.env = {...process.env, ...loadEnv(mode, process.cwd())};
async function fonts(){ 
  console.log ( process.env.VITE_API_URL )  
  const project = await fetch ( process.env.VITE_API_URL + '/config.json' ).then ( res => res.json() ).then ( pr => { return pr })
  if ( project ){
    var fnts = project.fonts //Array.isArray(project.fonts) ? project.fonts : project.fonts.split(',') //config.fonts
//   //console.log ( fonts )
    fnts.push ( 'Material Icons' )
    return fnts
  }
}

//import project from './config.json'

//module.exports = {
export default async ({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  const families = await fonts()
  return {
  plugins: [
    createVuePlugin(),
    ViteComponents({ deep:true }),
    ViteFonts({
      google: {
        families: families
      },
    }),
  ]
  }
};
