const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'client/node_modules '), 'node_modules']
  },
  module: {
	  rules: [
	    { 
	    	test: /\.js$/, 
	    	exclude: /node_modules/, 
  	    use: [{
          loader: "babel-loader",
          options: {
            "presets": ["es2015", "react"],
          }
        }]
	    },
	    {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          // "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      },
	    { 
	    	test: /\.(sass|scss)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
	  ]
	},
	devServer: {
    publicPath: "/public/dist/",
    contentBase: path.resolve(__dirname, './')
	}


};
