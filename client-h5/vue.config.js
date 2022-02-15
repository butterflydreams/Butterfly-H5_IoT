const vConsolePlugin = require("vconsole-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: (config) => {
    config.plugins = [
      ...config.plugins,
      ...[
        new vConsolePlugin({
          filter: [],
          enable: true,
        }),
      ],
    ];
  },
  devServer: {
    host: "0.0.0.0",
    port: 9999,
    open: true,
  },
};
