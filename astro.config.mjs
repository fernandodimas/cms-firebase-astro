// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Geração de Site Estático (SSG) — regra inegociável da skill
  output: 'static',

  // Build aponta para dist/ (referenciado no firebase.json)
  outDir: './dist',

  compressHTML: true,

  build: {
    // Gera assets com hashes para cache-busting
    assets: '_assets',
  },
});
