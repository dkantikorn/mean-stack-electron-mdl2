var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    'angular2': [
      'rxjs',
      'reflect-metadata',
      'zone.js',
      '@angular/core',
      '@angular/router',
      '@angular/http',
      'angular2-materialize'
    ],
    'app': './app/main'
  },

  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.html'],
    alias: {
      materializecss: 'materialize-css/dist/css/materialize.css',
      materialize: 'materialize-css/dist/js/materialize.js'
    }
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [/(node_modules|bower_components)/]
      },
      {
        test: /\.jsx?$/, // ถ้าเจอไฟล์นามสกุล js หรือ jsx
        loader: 'babel-loader'  // ให้ load ไฟล์นั้นด้วย babel นะ
      },
      {
        test: /materialize-css\/dist\/js\/materialize\.js/,
        loader: 'imports?materializecss'
      },
      { test: /materialize\.css$/, loader: 'style-loader!css-loader' },
      { test: /^((?!materialize).)*\.css$/, loader: 'raw-loader' },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
      {
          test: /\.scss$/, // ถ้าเจอไฟล์ .scss
          loaders: ["style", "css?sourceMap", "sass?sourceMap"] // ให้ load ไฟล์นั้นด้วย style-loader, css-loader และ sass-loader
      }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js' }),
    //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),//// เซฟ vendors ออกมาเป็นไฟล์ vendors.js
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Hammer: "hammerjs/hammer"
    })
  ],
  target: 'electron-renderer'
};
