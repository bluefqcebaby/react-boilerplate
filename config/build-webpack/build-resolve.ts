import { Configuration } from 'webpack';
import { IBuildOptions } from './types';

export const buildResolve = (options: IBuildOptions): Configuration['resolve'] => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@': options.paths.src,
  },
});
