import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import alias from '@rollup/plugin-alias'
import path from 'path';
const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    alias({
      entries: [
        { find: 'src', replacement: path.resolve(projectRootDir, 'src') },
      ]
    })
  ]
})
