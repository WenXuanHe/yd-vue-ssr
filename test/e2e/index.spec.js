module.exports = {
  'topics e2e tests' : function (browser) {
    const devServer = browser.globals.devServerURL + 'topics';
    browser
      .url(devServer)
      // .waitForElementVisible('#app', 1000)
      // .pause(1000);
      // .assert.elementPresent('.view')
      // .assert.containsText('h1', 'Welcome to Your Vue.js App')
      // .assert.elementCount('div', 10)
      // .end()
      browser.elements('css selector','.view div',function (res) {
      	browser.verify.equal(res.value.length,10)
      }).end();
  }
};
