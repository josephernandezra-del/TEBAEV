import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function copyAssetsPlugin() {
  return {
    name: 'copy-assets-plugin',
    async closeBundle() {
      const srcDir = path.resolve(__dirname, 'src/assets/images');
      const destDir1 = path.resolve(__dirname, 'dist/src/assets/images');
      const destDir2 = path.resolve(__dirname, 'dist/assets/images');
      
      const copyDir = (src: string, dest: string) => {
        try {
          if (!fs.existsSync(src)) return;
          fs.mkdirSync(dest, { recursive: true });
          const items = fs.readdirSync(src);
          for (const item of items) {
            const srcPath = path.join(src, item);
            const destPath = path.join(dest, item);
            const stat = fs.statSync(srcPath);
            if (stat.isFile()) {
              fs.copyFileSync(srcPath, destPath);
            } else if (stat.isDirectory()) {
              copyDir(srcPath, destPath);
            }
          }
        } catch (err) {
          console.error(`Error copying from ${src} to ${dest}:`, err);
        }
      };

      console.log('Copying images for production build...');
      copyDir(srcDir, destDir1);
      copyDir(srcDir, destDir2);
      console.log('Images successfully copied to dist/src/assets/images and dist/assets/images!');
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), copyAssetsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
