import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    dts({ tsconfigPath: "./tsconfig.app.json" }),
    svelte(),
    svelteTesting(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "fontawesome-svelte",
      formats: ["es"],
      fileName: (format) =>
        ({
          es: `${pkg.name}.js`,
        })[format],
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
  test: {
    environment: "happy-dom",
    globals: true,
  },
}));
