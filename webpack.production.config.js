const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglyJs =
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = 
  new HtmlWebpackPlugin ({
    filename: 'index.html',
    template: 'src/index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
});

const CompressionPlugin = require('compression-webpack-plugin');
const gzipPlugin =
  new CompressionPlugin({
    test: /\.js$/,
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 0,
    minRatio: 0.8,
  });
  
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin = 
  new CleanWebpackPlugin('dist', {});

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerPlugin =
  new BundleAnalyzerPlugin();

const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const progressPlugin =
  new SimpleProgressWebpackPlugin({
    format: 'compact',
  });
 
module.exports = { 
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      'Store': path.resolve(__dirname, 'src/store/'),
      'Components': path.resolve(__dirname, 'src/components/'),
      'Images': path.resolve(__dirname, 'src/assets/images/'),
      'Context': path.resolve(__dirname, 'src/data/'),
      'DATA': path.resolve(__dirname, 'src/data/'),
      'Types': path.resolve(__dirname, 'types/'),
      'Mocks': path.resolve(__dirname, '__mocks__/'),
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
        },
      },
    },
    minimizer: [
      uglyJs,
    ],
  },
  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: true,
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[path][name].[ext]",
              context: "src/assets/images/",
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    progressPlugin,
    analyzerPlugin,
    cleanPlugin,
    gzipPlugin,
    htmlPlugin,
  ],
};
