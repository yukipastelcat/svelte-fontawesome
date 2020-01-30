import pluginSvelte from 'rollup-plugin-svelte';
import pluginResolve from '@rollup/plugin-node-resolve';
import pluginCommonJs from '@rollup/plugin-commonjs';
import { terser as pluginTerser } from "rollup-plugin-terser";
import pluginBabel from 'rollup-plugin-babel';

import pkg from './package.json';

const name = 'FontawesomeSvelte';
const globals = {
  '@fortawesome/fontawesome-svg-core': 'FontAwesome'
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name,
      globals,
    },
    {
      file: pkg.module,
      format: 'esm',
      globals,
    }
  ],
  plugins: [
    pluginSvelte({
      include: 'src/**/*.svelte',
    }),
    pluginResolve(),
    pluginCommonJs(),
    pluginBabel(),
    pluginTerser({
      compress: {
        drop_console: false
      }
    }),
  ]
}
