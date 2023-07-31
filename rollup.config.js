import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript(),
    commonjs(),
    nodeResolve()
  ],
  external: ['react', 'react-dom']
};
