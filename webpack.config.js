var webpack = require('webpack');  
var path = require('path');
module.exports = {  
  entry: './app/main.ts',
  output: {
    filename: 'bundle.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // Add minification
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { 
          test: /\.ts$/,
          loader: 'ts',
        //   include: path.resolve(__dirname, 'app')
     }
    ]
  }
}