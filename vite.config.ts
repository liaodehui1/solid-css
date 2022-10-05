import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "index",
      fileName: (format) => `index.${format}.js`, // 打包后的文件名
    },
    target: "esnext",
  },
});
