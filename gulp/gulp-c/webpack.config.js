var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    home: './src/js/home.js',
    report: './src/js/report.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: '/\.js$/', use: [{loader: 'babel-loader'}]}
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",

    //   filename: "common.js",
    //   // (给 chunk 一个不同的名字)

    //   minChunks: 22,
    //   // 随着 entrie chunk 越来越多，
    //   // 这个配置保证没其它的模块会打包进 vendor chunk
    // }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}