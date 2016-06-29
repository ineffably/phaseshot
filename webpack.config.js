var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
})

module.exports = {
  entry: { app: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/main.js')
    ]
  }
  ,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=es2015'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/
    }, {
      test: /pixi\.js/,
      loader: 'expose?PIXI'
    }, {
      test: /phaser-split\.js$/,
      loader: 'expose?Phaser'
    }, {
      test: /p2\.js/,
      loader: 'expose?p2'
    }]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new htmlWebpackPlugin()
  ]  
}