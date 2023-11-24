import { ModuleOptions } from 'webpack';
import { IBuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildModule = (options: IBuildOptions): ModuleOptions => {
  const isDev = options.mode === 'development';

  const assetRule: ModuleOptions['rules'][0] = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const cssRule: ModuleOptions['rules'][0] = {
    test: /\.css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  };

  const swcLoader: ModuleOptions['rules'][0] = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'swc-loader',
      options: {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
              development: isDev,
              refresh: isDev,
            },
          },
        },
      },
    },
  };

  return {
    rules: [assetRule, swcLoader, cssRule],
  };
};
