import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import globals from 'rollup-plugin-node-globals';
import alias from '@rollup/plugin-alias';


export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    sass(),
    typescript(),
    alias({
      entries: [
        { find: '@', replacement: '.' },
      ]
    }),
    commonjs(),
    nodeResolve(),
    globals(),
  ],
  external: ['react', 'react-dom']
};
