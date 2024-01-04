import { IBuildOptions } from './types';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export const buildPlugins = (
  options: IBuildOptions,
): Configuration['plugins'] => {
  const isDev = options.mode === 'development';
  const isProd = !isDev;

  const plugins: Configuration['plugins'] = [
    new Dotenv({ silent: false }),
    new HtmlWebpackPlugin({
      template: options.paths.htmlFile,
    }),
    new DefinePlugin({
      __ENV__: JSON.stringify(options.mode),
      __SUPABASE_URL__: JSON.stringify(
        'https://elyzrragsopdybylcluq.supabase.co',
      ),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/shared/assets/favicon/',
          to: './assets/favicon/',
        },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(
      ...[
        new webpack.ProgressPlugin(),
        new ReactRefreshWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
      ],
    );
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({ filename: 'styles.css' }));
  }

  return plugins;
};
