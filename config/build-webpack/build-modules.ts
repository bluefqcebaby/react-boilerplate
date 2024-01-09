import { ModuleOptions, RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types';

export const buildModule = (options: IBuildOptions): ModuleOptions => {
  const isDev = options.mode === 'development';

  const assetRule: RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const cssRule: RuleSetRule = {
    test: /\.css$/,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  const swcLoader: RuleSetRule = {
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
