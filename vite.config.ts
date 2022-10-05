import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
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
