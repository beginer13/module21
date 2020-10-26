const path = require('path');
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");
const TerserWebpackPlugin = require ("terser-webpack-plugin");
const OptimizeCssWebpackPlugin = require ("optimize-css-assets-webpack-plugin");
const HtmlWebPackPlugin = require ("html-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './index.js',
  // mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  plugins : [ 
    new MiniCssExtractPlugin(),
    new TerserWebpackPlugin(),
    new OptimizeCssWebpackPlugin(),
    new HtmlWebPackPlugin ({
      template: "./src/index.pug",
      filename: "index.html"
    }),
    new StylelintPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new OptimizeCssWebpackPlugin()],
    },

  module: {
    rules: [
      { test: /\.css$/,
       use: [{
         loader: MiniCssExtractPlugin.loader,
         options: {
           esModule: true,
         }
       }, 'css-loader'] },
       {
         test: /\.pug$/,
         use: 'pug-loader'
       },
       {
         test: /\.js$/,
         exclude: '/node_modules/',
         use: 'eslint-loader'
       }
    ]
  }
};