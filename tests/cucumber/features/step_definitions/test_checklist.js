const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

Given('I open my browser at {string}', function (address) {
    this.driver = new webdriver.Builder().forBrowser('chrome').build();
    return this.driver.get(address);
});

When('I click the button', function () {
    return this.driver.findElement(By.id('chouette-boutton')).then(element => element.click())
});

Then('{string} disapear', function (textId) {
        return this.driver.findElements(By.id(textId))
            .then(found => assert.equal(found.length, 0));
});

When('I do nothing', function () {
    
});

Then('{string} is here', function (textId) {
        return this.driver.findElements(By.id('chouette'))
            .then(found => assert.equal(found.length, 1));
});