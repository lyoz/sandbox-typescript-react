module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist",
    historyApiFallback: true,
    open: false,
  },
};
