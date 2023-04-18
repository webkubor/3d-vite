import path from "path";
import vue from "@vitejs/plugin-vue";


export default {
  base: process.env.NODE_ENV === "development" ? "/" : "./",
  alias: {
    "/@": path.resolve(__dirname, "src"),
    three: "three/build/three.module.js",
  },
  plugins: [  vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'my-component'
      }
    }
  })],
};
