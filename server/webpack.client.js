const path = require("path");
const baseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");

const config = {
  target: "web",
  entry: "./client/client.js",
  mode: "development",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(config, baseConfig);
