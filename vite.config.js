import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// More details can be found in [Vite's configuration guide](https://vite.dev/config/)
export default defineConfig({
  plugins: [react()],
  base: "/", // <-- ADD THIS LINE: Tells Vite to serve assets from the root domain
})
