import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import createWebpackConfig from 'react-scripts/config/webpack.config';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// TODO: Ensure this still works when upgrading `react-scripts`.
const webpackConfig = createWebpackConfig('production');
const { terserOptions } = webpackConfig.optimization.minimizer[0].options;

const sourcemap = true;
const input = 'src/index.ts';
const globals = { react: 'React' };
// TODO: Change `name` to your library's name (https://rollupjs.org/guide/en/#outputname).
const name = 'ReactLibraryTemplate';
const external = Object.keys(pkg.peerDependencies || {});
const extensions = ['.mjs', '.js', '.json', '.node', '.jsx', '.ts', '.tsx'];

const nodeResolveOptions = {
  extensions,
};

const commonjsOptions = {
  extensions,
};

const babelOptions = {
  runtimeHelpers: true,
  exclude: ['node_modules/**/*'],
  extensions: extensions.filter((ext) => ext !== '.json'),
};

const cjs = {
  input,
  external,
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap,
  },
  plugins: [
    nodeResolve(nodeResolveOptions),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(commonjsOptions),
    babel(babelOptions),
  ],
};

const es = {
  input,
  external,
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap,
  },
  plugins: [
    nodeResolve(nodeResolveOptions),
    // We only need to generate type declarations once during the CommonJS build step.
    typescript({ tsconfigOverride: { declaration: false } }),
    commonjs(commonjsOptions),
    babel(babelOptions),
  ],
};

const umd = {
  input,
  external,
  output: {
    file: 'dist/index.umd.min.js',
    format: 'umd',
    name,
    globals,
    sourcemap,
  },
  plugins: [
    nodeResolve(nodeResolveOptions),
    typescript({ tsconfigOverride: { declaration: false } }),
    commonjs(commonjsOptions),
    babel(babelOptions),
    terser({ ...terserOptions, sourcemap }),
  ],
};

export default [cjs, es, umd];
