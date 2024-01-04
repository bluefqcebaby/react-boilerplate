import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { IBuildOptions } from './config/build-webpack/types';
import { buildWebpack } from './config/build-webpack';

export default (env: IBuildOptions) => {
  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 7777,
    paths: {
      src: path.resolve(__dirname, 'src'),
      entry: path.resolve(__dirname, 'src', 'app', 'app-entry.tsx'),
      output: path.resolve(__dirname, 'build'),
      htmlFile: path.resolve(__dirname, 'public', 'index.html'),
    },
  });

  return config;
};
