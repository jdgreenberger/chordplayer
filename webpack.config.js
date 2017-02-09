const path = require('path')
const stylusLoader = require('stylus-loader')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './entry.js'],
  output: {filename: 'bundle.js'},
  devServer: {
    inline: true,
    port: 8010,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        loader: 'url-loader',
        options: {
          limit: 25000
        }
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: "css-loader?${cssLoaderQuery.join '&'}",
            options: { modules: true }
          },
          'stylus-loader?resolve url'
        ]
      },
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          },
        }],
        exclude: '/node_modules',
      },
    ],
  }
};
