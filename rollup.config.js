﻿import pluginSvelte from 'rollup-plugin-svelte';
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
  external: [
    '@fortawesome/fontawesome-svg-core'
  ],
  input: 'src/index.js',
  output: [
    {
      name,
      globals,
      file: pkg.main,
      exports: 'named',
      format: 'umd',
    },
    {
      globals,
      file: pkg.module,
      format: 'esm',
    }
  ],
  plugins: [
    pluginSvelte({
      include: 'src/**/*.svelte',
    }),
    pluginResolve({
      jsnext: true,
      main: true
    }),
    pluginCommonJs({
      include: 'node_modules/**'
    }),
    pluginBabel(),
    pluginTerser({
      compress: {
        drop_console: false
      }
    }),
  ]
}
