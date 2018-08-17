var webpack = require("webpack");
var path = require("path");
module.exports = {
  devtool: "inline-source-map",
  entry: {
    app: [
      path.resolve(__dirname, "src", "client"),
      "webpack-hot-middleware/client"
    ],
    vendor: ["babel-polyfill", "react", "react-dom"]
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    publicPath: "/assets"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
