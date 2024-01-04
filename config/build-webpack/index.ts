import { Configuration } from 'webpack';
import { IBuildOptions } from './types';
import { buildModule } from './build-modules';
import { buildDevServer } from './build-dev-server';
import { buildResolve } from './build-resolve';
import { buildPlugins } from './build-plugins';

export const buildWebpack = (options: IBuildOptions): Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    devServer: buildDevServer(options),
    resolve: buildResolve(options),
    plugins: buildPlugins(options),
    module: buildModule(options),
    devtool: 'source-map',
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
  };
};
