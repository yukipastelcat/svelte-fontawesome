import pluginSvelte from 'rollup-plugin-svelte';
import pluginResolve from '@rollup/plugin-node-resolve';
import pluginCommonJs from '@rollup/plugin-commonjs';
import { terser as pluginTerser } from "rollup-plugin-terser";
import pluginBabel from 'rollup-plugin-babel';

import pkg from './package.json';

const name = 'FontawesomeSvelte';
const globals = {
  '@fortawesome/fontawesome-svg-core': 'FontAwesome'
};
const input = 'src/index.js';
const plugins = [
  pluginResolve(),
  pluginCommonJs({
    include: 'node_modules/**'
  }),
  pluginBabel(),
  pluginTerser({
    compress: {
      drop_console: false
    }
  }),
];

export default [
  {
    external: [
      '@fortawesome/fontawesome-svg-core'
    ],
    input,
    output: {
      globals,
      file: pkg.module,
      format: 'esm',
    },
    plugins: [
      pluginSvelte(),
      ...plugins,
    ]
  },
  {
    input,
    output: {
      name,
      file: pkg.main,
      exports: 'named',
      format: 'umd',
    },
    plugins: [
      pluginSvelte({
        generate: 'ssr'
      }),
      ...plugins,
    ]
  }
];
