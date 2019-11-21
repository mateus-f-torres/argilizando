const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanUpPlugin =
  new CleanWebpackPlugin();

const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const progressPlugin =
  new SimpleProgressWebpackPlugin({
    format: 'compact',
  });

const webpack = require('webpack');
const hotReloadPlugin =
  new webpack.HotModuleReplacementPlugin();

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const optimizeCss =
  new OptimizeCSSAssetsPlugin({});

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let cssPlugin;
if (process.env.NODE_ENV === 'production') {
  cssPlugin = new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: "[id].[hash].css",
  });
} else {
  cssPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  });
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin =
  new HtmlWebpackPlugin ({
    title: 'Argilizando',
    filename: 'index.html',
    template: 'src/index.html',
    // favicon: 'src/assets/images/favicon.ico',
});

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerPlugin =
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: 'static',
    generateStatsFile: false,
    reportFilename: '../reports/bundle_report.html',
    statsFilename: '../reports/bundle_stats.json',
  });

const terserPlugin = require('terser-webpack-plugin');
const terser =
  new terserPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
  });

const CompressionPlugin = require('compression-webpack-plugin');
const gzipPlugin =
  new CompressionPlugin({
    test: /.(js|css|html|svg)$/,
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 0,
    minRatio: 0.8,
  });

const DEFAULT_PORT = 8080;

let configs = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Styles: path.resolve(__dirname, 'src/assets/stylesheets'),
      Images: path.resolve(__dirname, 'src/assets/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {hmr: true}
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: 'images/',
            },
          },
        ],
      }
    ],
  },
  plugins: [
    progressPlugin,
    cleanUpPlugin,
    htmlPlugin,
    cssPlugin,
    hotReloadPlugin,
  ],
  devServer: {
    hot: true,
    port: process.env.PORT || DEFAULT_PORT,
    host: '0.0.0.0',
    disableHostCheck: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  },
};

if (process.env.NODE_ENV === 'production') {
  configs = Object.assign({}, configs, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            name: 'vendors',
          },
          styles: {
            test: /\.css$/,
            chunks: 'all',
            name: 'styles',
            enforce: true,
          },
        },
      },
      minimizer: [
        terser,
        optimizeCss,
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                compact: true,
              },
            }
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {hmr: false}
            },
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5 * 1024,
                fallback: 'file-loader',
                name: '[name].[hash].[ext]',
                outputPath: 'images/',
              },
            },
            'image-webpack-loader',
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 5 * 1024,
                noquotes: true,
                fallback: 'file-loader',
                name: '[name].[hash].[ext]',
                outputPath: 'images/',
              },
            },
            'image-webpack-loader',
          ],
        },
      ],
    },
    plugins: [
      progressPlugin,
      analyzerPlugin,
      cleanUpPlugin,
      gzipPlugin,
      cssPlugin,
      htmlPlugin,
    ],
  });
}

module.exports = configs;
