import { Configuration } from 'webpack';
import { IBuildOptions } from './types';
import path from 'path';

export const buildResolve = (
  options: IBuildOptions,
): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
};
