const baseConfig = require('./webpack.common')
const merge = require('webpack-merge')
const proxy = require('./proxy')

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    proxy,
    watchOptions: {
      poll: true
    },
    contentBase: baseConfig.output.path
  }
})