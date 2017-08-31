var HtmlReporter = require('nightwatch-html-reporter');
var chromedriver = require('chromedriver');
var reporter = new HtmlReporter({
    openBrowser: true,
    themeName: 'cover',
    reportsDirectory: __dirname + '/reports/e2e'
});
module.exports = {
    reporter: reporter.fn
};