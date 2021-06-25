const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root = path.resolve(__dirname);
const src = path.join(root, 'src');
const modules = path.join(root, 'node_modules');
const prod = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({ filename: './base.css' }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: prod ? true : false
  },
  devtool: 'source-map',
  entry: "./src/ui/react-pathway-mapper.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.es5.js",
    library: 'pathway-mapper',
    libraryTarget: 'commonjs-module'
  },
  node: {
    fs: 'empty'
  },
  externals: [
    nodeExternals({
      // TODO a workaround for problematic imports, ideally these should not be included in the bundle
      modulesFromFile: true
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
      use: [
        MiniCssExtractPlugin.loader, 
        'css-loader'
      ]
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
  }
};
