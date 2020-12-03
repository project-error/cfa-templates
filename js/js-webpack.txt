//const webpack = require('webpack');
const path = require("path")

const client = {
  entry: './client/client.js',
  optimization: {
    minimize: true
  },
  resolve: {
    extenstions: ['.js']
  },
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: '[contnethash].client.js'
  }
}

const server = {
  entry: './server/server.js',
  optimization: {
    minimize: true
  },
  resolve: {
    extenstions: ['.js']
  },
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: '[contnethash].server.js'
  }
}

module.exports = [client, server]