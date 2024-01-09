import { Configuration } from 'webpack-dev-server';
import { IBuildOptions } from './types';

export const buildDevServer = (options: IBuildOptions): Configuration => {
  const isProd = options.mode === 'production';
  const { port } = options;

  if (isProd) {
    return {};
  }

  return {
    compress: true,
    port,

    /**
     * чтобы работала навигация на продовском контуре
     * в nginx нужно настраивать проксирование на index.html
     */

    historyApiFallback: true,
    hot: true,
  };
};
