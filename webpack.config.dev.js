'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  devtool: 'inline-source-map',
  entry: [_path2.default.resolve(__dirname, 'src/index')],
  target: 'web', // code set this to node, electron, etc
  output: {
    path: _path2.default.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }, { test: /\.css$/, loaders: ['style', 'css'] }]
  }
};

// import path from 'path';

// export default {
//   debug: true,
//   devtool: 'inline-source-map',
//   noInfo: false,
//   entry: [
//     path.resolve(__dirname, 'src/index')
//   ],
//   target: 'web', // code set this to node, electron, etc
//   output: {
//     path: path.resolve(__dirname, 'src'),
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [],
//   module: {
//     loaders: [
//       { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
//       { test: /\.css$/, loaders: ['style', 'css'] }
//     ]
//   }
// }
