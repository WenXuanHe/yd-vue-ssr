// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
    src_folders: ['test/e2e/'],
    output_folder: 'reports/e2e/',
    'globals_path': 'nightwatch.global.js',
    selenium: {
        start_process: true,
        server_path: require('selenium-server').path,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': require('chromedriver').path,
            'webdriver.gecko.driver': './bin/geckodriver'
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            globals: {
                devServerURL: 'http://localhost:8081/'
            }
        },
        chrome: {
            silent: true,
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
        firefox: {
            silent: true,
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}