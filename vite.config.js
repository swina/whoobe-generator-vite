const { createVuePlugin } = require('vite-plugin-vue2');
import { defineConfig, loadEnv } from 'vite';
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'
import fetch from 'node-fetch'
import fs from 'fs-extra'

async function fonts(){ 
  const project = await fetch ( process.env.VITE_API_URL + '/config.json' ).then ( res => res.json() ).then ( pr => { return pr })
  if ( project ){
    fs.writeFileSync ( './project.json' , JSON.stringify(project) )
    var fnts = project.fonts 
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