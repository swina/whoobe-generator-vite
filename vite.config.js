const { createVuePlugin } = require('vite-plugin-vue2');
import { loadEnv } from 'vite';
import ssr from 'vite-plugin-ssr/plugin'
import viteImagemin from 'vite-plugin-imagemin';
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'
import { VitePWA } from 'vite-plugin-pwa'
import fetch from 'node-fetch'
import fs from 'fs-extra'
import path from 'path'

async function autoConfig(){ 
  //load configuration file from external resource (generate by CMS)
  var project = await fetch ( process.env.VITE_API_URL + '/config.json' ).then ( res => res.json() ).then ( pr => { return pr })
  var articles_template = await fetch ( process.env.VITE_API_URL + '/articles.json' ).then ( res => res.json() ).then ( pr => { return pr })
  let outFolder = !project.target ? path.join(__dirname, "dist") : project.target
  
  if ( project ){
    //create local project file uses by tailwind.config.js to purge
    fs.writeFileSync ( './project.json' , JSON.stringify(project) )
    //font families to load
    //var fnts = project.fonts 
    //add Material Icons font
    //fnts.push ( 'Material Icons' )
    //project.fonts = [...new Set(fnts)]
    return project
  }
}

export default async ({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  //get the fonts array
  const config = await autoConfig()
  return {
    build: {
      outDir: !config.target ? path.join(__dirname, "dist") : fs.ensureDir(config.target) ,
      emptyOutDir: true
    },
    plugins: [
      ssr(),
      createVuePlugin(),
      ViteComponents({ deep:true }),
      viteImagemin(),
      ViteFonts({
        google: {
          families: config.fonts
        },
      }),
      /*VitePWA({
        registerType: 'prompt',
        manifest: {
            "theme_color": "#5c5555",
            "background_color": "#ffffff",
            "display": "fullscreen",
            "start_url": "./",
            "name": config.seo.title, //"Antonio Nardone - Webspecialist",
            "short_name": config.seo.title,//"antonionardone.com",
            "description": config.description,//"Antonio Nardone Portfolio",
            "icons": [
                {
                    "src": "/icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/icon-256x256.png",
                    "sizes": "256x256",
                    "type": "image/png"
                },
                {
                    "src": "/icon-384x384.png",
                    "sizes": "384x384",
                    "type": "image/png"
                },
                {
                    "src": "/icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                },
                {
                    "src": "/apple-touch-icon.png",
                    "sizes": "180x180",
                    "type": "image/png"
                }
                
            ]
        
        }
        
      })*/
    ],
    server: {
      hmr : { overlay: false }
    }
  }
};