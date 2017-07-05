const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool : 'eval-source-map',
  entry : __dirname + '/app/main.js',
  output : {
    path : __dirname + '/build',
    filename : 'bundle.js'
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
    new webpack.webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template : __dirname + "/app/index.tmpl.html"
    })
  ],

  devServer : {
    contentBase : './public',
    colors : true,
    historyApiFallback : true,
    inline : true
  }
}
