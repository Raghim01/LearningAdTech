import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
const modules = ["/src/debugHighlight.js"];

function virtualModules() {
  return {
    name: "virtual-modules",
    resolveId(id) {
      if (id === "virtual:plugins") {
        return id;
      }
      return null;
    },
    load(id) {
      if (id === "virtual:plugins") {
        return modules.map((module) => `import '${module}';`).join("\n");
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [Inspect(), virtualModules()],

  root: "./",
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "assets/wrapper.js",
        chunkFileNames: "assets/wrapper-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
  },
});
