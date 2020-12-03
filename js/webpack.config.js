//const webpack = require('webpack');
const path = require("path")

const client = {
  entry: './client/client.js',
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js']
  },
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].client.js'
  }
}

const server = {
  entry: './server/server.js',
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js']
  },
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].server.js'
  }
}

module.exports = [client, server]