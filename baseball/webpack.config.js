const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'baseball',
  mode: 'development',
  devtool: 'inline-source-map', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './Client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
          
            targets: {
              browsers: ['> 1% in KR'], // browserslist 참고
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: ['react-refresh/babel'],
      },
    }],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath:'/dist'
    },
  devServer:{
    devMiddleware:{
      publicPath:'/dist'},
    static:{directory: path.resolve(__dirname)},
    hot:true

  },
};
