import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', 
  build: {
    outDir: 'dist', 
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif', '**/*.PNG'] 
});
