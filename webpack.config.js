const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'source-map',
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "react-pathway-mapper.es5.js"
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    'extensions': [
      '.js',
      '.jsx',
      '.json',
      '.ts',
      '.tsx',
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    },{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    },

      {
      test: /\.(ts|tsx)?$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "ts-loader"
        }
      ]
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: ['css-loader']
        }
      )
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-inline-loader'
        }
      ]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",  //target html
      template: "./src/index.html" //source html
    }),
    new ExtractTextPlugin({ filename: './src/base.css' })
  ]
};
