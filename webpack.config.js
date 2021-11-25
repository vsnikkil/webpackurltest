module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
