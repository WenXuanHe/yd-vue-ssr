/**
 *@Description 生成vue-ssr-server-bundle开发配置选项
 */
const conf = require('./webpack.conf');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const options = {
    // 并且还会在编译 Vue 组件时，告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
    //告诉webpack 以 node试用的方式处理动态导入 并且还会通知vue编译组件时成成服务端的代码
    target: 'node',
    // 对 bundle renderer 提供 source map 支持
    devtool: false,
    output: {
        path: conf.rootPath + '/build/assets/',
        publicPath: '/',
        //此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
        libraryTarget: 'commonjs2',
        filename: '[name].bundle.js'
    },
    // externals: ['axios'],
  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // 外置化应用程序依赖模块。可以使服务器构建速度更快，
  // 并生成较小的 bundle 文件。
  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块。
    // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    whitelist: /\.css$/
  }),
  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块。
    // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    whitelist: /\.css$/
  }),
    //服务器的整个输出默认文件名 `vue-ssr-server-bundle.json`
    plugins: [
        new VueSSRServerPlugin()
    ]
};
const _options = Object.assign(options, conf.server);
module.exports = _options;