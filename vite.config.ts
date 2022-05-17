import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem"
import styleImport, { VantResolve } from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => {
            return `../es/${name}/style/index`;
          },
        },
      ],
    }),],
  server: { // 加上之后不提示Network: use `--host` to expose
    host: '0.0.0.0'
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       postCssPxToRem({
  //         rootValue: 37.5, //
  //         propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
  //       })
  //     ]
  //   },
  // },
})
