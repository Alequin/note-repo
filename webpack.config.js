
const path = require('path');

const appEntry = "./client/main.js"

const bundleName = "bundle.js"
const bundleOutput = path.resolve(__dirname, "build")

module.exports = {
  mode: "development",
  entry: appEntry,
  output: {
    path: bundleOutput,
    filename: bundleName
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
}
