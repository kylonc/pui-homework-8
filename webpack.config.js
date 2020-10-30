"use strict";

module.exports = {
  // Set debugging source maps to be "inline" for
  // simplicity and ease of use
  devtool: "source-map",

  // The application entry point
  entry: "./index.tsx",

  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    filename: "bundle.js"
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  // File extensions to support resolving
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};