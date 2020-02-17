const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const root = path.resolve(__dirname);
const src = path.join(root, 'src');
const modules = path.join(root, 'node_modules');


module.exports = {
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  entry: "./src/ui/react-pathway-mapper.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "react-pathway-mapper.es5.js",
    library: 'react-pathway-mapper',
    libraryTarget: 'commonjs-module'
  },
  node: {
    fs: 'empty'
  },
  externals: [
    nodeExternals({
      // TODO a workaround for problematic imports, ideally these should not be included in the bundle
      whitelist: [
        'cytoscape-edge-editing',
        'cytoscape-context-menus',
        'cytoscape-node-resize',
        'cytoscape-view-utilities'
      ]
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.ts',
      '.tsx',
    ],
    modules: [
      src,
      modules
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
          loader: 'url-loader'
        }
      ]
    },{
      test: /\.svg$/,
      use: [{
        loader: 'url-loader'
      }]
    },
    {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
          loader: 'file-loader'
      }]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",  //target html
      template: "./src/index.html" //source html
    }),
    new ExtractTextPlugin({ filename: './base.css' })
  ]
};
