// Karma configuration
// Generated on Tue Aug 22 2017 17:41:12 GMT+0800 (CST)
var path = require('path');
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './test/unit/',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // plugins: ['karma-coverage-istanbul-reporter'],
        // list of files / patterns to load in the browser
        files: [
            'index.js'
        ],

        // list of files to exclude
        exclude: [],

        // webpack解决require babel负责编译ES6 coverage测试代码覆盖率
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'index.js': ['webpack', 'babel'] 
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        webpack: {
            module: {
                rules: [
                    // instrument only testing sources with Istanbul 
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'istanbul-instrumenter-loader',
                            options: { esModules: true }
                        },
                        enforce: 'post',
                        include: path.resolve('./src/webapp/libs')
                    }
                ]
            }
        },
        coverageReporter: {
            type: 'html',
            dir: '../../reports/'
        },
        // coverageIstanbulReporter: {
        //     reports: ['text-summary'],
        //     fixWebpackSourcePaths: true
        // },
        babelPreprocessor: {
            options: {
                babelrc: false,
                presets: ['es2015', 'stage-0'],
            }
        },
        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
