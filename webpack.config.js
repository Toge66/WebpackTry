const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool : 'eval-source-map',
  entry : __dirname + '/app/main.js',
  output : {
    path : __dirname + '/build',
    filename : '[name]-[hash].js'
  },

  module : {
    loaders : [
      { test : /\.json$/, loader : 'json-loader' },
      { test : /\.js$/, exclude : /node_modules/, loader : 'babel-loader', },
      { test : /\.css$/, loader : 'style-loader!css-loader!postcss-loader?modules' }
    ]
  },

  plugins : [
    new webpack.BannerPlugin("Hello test"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template : __dirname + "/app/index.tmpl.html"
    }),
    new ExtractTextPlugin("[name]-[hash].css")
  ],

  devServer : {
    contentBase : './public',
    colors : true,
    historyApiFallback : true,
    inline : true
  }
}
