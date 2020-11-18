const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "./src/styles/global.scss";
            `,
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["./src/styles/global.scss"],
    },
  },
  configureWebpack: {
    devtool: "source-map",
    optimization: {
      minimize: true,
      minimizer: [
        isProd &&
          new TerserPlugin({
            terserOptions: {
              compress: true,
              toplevel: true,
              mangle: true,
              keep_fnames: false,
              output: {
                comments: false,
              },
              warnings: false,
            },
            extractComments: false,
            parallel: true,
          }),
      ].filter(Boolean),
    },
  },
  chainWebpack(config) {
    config.plugin("CompressionPlugin").use(CompressionPlugin);
  },
  productionSourceMap: false,
};
