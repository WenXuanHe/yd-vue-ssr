/**
 *@Description 生产环境Webpack配置项
 */
const conf = require('./webpack.conf');
const path = require('path');
const webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
let vueConfig = require('./vue-loader.config');
vueConfig.loaders = {
    // css: ExtractTextPlugin.extract({
    //     fallback: 'vue-style-loader',
    //     use: 'css-loader!postcss-loader'
    // }),
    extractCSS: true
};
const options = {
    output: {
        path: conf.rootPath + '/build/assets/',
        publicPath: '/',
        filename: 'scripts/[name].[chunkhash:5].bundle.js'
    },
    externals: {
        'vue': 'Vue',
        'vuex':'Vuex',
        'vue-router':'VueRouter'
    },
    plugins: [
        //tree shaking
        //Scope Hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin("styles/[name].[hash:5].css"),
        //多entry提取公用代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'scripts/[name].js',
            minChunks: 2
        }),
        //webpack必备代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minify: {
                collapseWhitespace: true
            },
            filename: 'scripts/[name].[hash:5].js',
            minChunks: Infinity,
            chunks: ['common']
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new uglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            output: {
                comments: false
            },
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告  
                warnings: true,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                //内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            },
            sourceMap: false
        }),
        new VueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/webapp/index.html',
            inject: false,
            minify: {
                // removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        })
    ]
}
let _options = Object.assign(options, conf.prod);
module.exports = _options;