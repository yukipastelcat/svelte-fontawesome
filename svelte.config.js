import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { compile } from "svelte/compiler";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  compilerOptions: {
    customElement: true,
  },
  test: {
    globals: true,
  },
};
