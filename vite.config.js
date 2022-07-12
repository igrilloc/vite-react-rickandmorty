import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(
  {
    base: 'https://igrilloc.github.io/vite-react-rickandmorty/',
    plugins: [react()]
  }
)
