
var webpack = require('webpack')

var configuration = {
  browsers: [
    'Firefox'
  ],

  singleRun: true,

  files: [
    'index.js'
  ],

  frameworks: [
    'mocha'
  ],

  plugins: [
    'karma-firefox-launcher',
    'karma-mocha',
    'karma-mocha-reporter',
    'karma-webpack'
  ],

  preprocessors: {
    'index.js': [ 'webpack' ]
  },

  reporters: [ 'mocha' ],

  webpack: {
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new webpack.IgnorePlugin(/react\/lib\/ReactContext/)
    ]
  },

  webpackMiddleware: {
    noInfo: true
  },

  client: {
    mocha: {
      reporter: 'html',
      ui: 'bdd'
    }
  }

}

module.exports = function (config) {
  config.set(configuration)
}

