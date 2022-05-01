/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: "dist",
    historyApiFallback: true,
  },
};
