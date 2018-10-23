const { After, Before } = require('cucumber');
// const webdriver = require("selenium-webdriver");

// Before(function () {
//     this.driver = new webdriver.Builder().forBrowser('chrome').build();
//     return this.driver.get('http://www.google.com');
// });

After(function() {
    if (this.driver) {
        this.driver.quit();
    }
})