import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://nerby16.github.io/RickAndMorty",
  plugins: [react()],
})
