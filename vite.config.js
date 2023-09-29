import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest: {
        
          "name": "My React PWA",
          "short_name": "My PWA",
          "start_url": "./",
          "display": "standalone",
          "background_color": "#ffffff",
          "theme_color": "#000000",
          "icons": [
            {
              "src": "/assets/react.svg",
              "sizes": "192x192",
              "type": "image/svg"
            },
            {
              "src": "/assets/react.svg",
              "sizes": "512x512",
              "type": "image/svg"
            }
          ]
        
        
      },
    }),],
})
