const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const CommonWebdriver = require('../common/CommonWebdriver');

async function submit(element) {
    await element.sendKeys('Cheese!').then(function () {
        element.submit();
    })

}

Given('I am on the Google search page', { timeout: 4 * 5000 }, async function () {
    let driver = CommonWebdriver.getDriver();
    return driver.get('http://www.google.com');
});

When('I search for {string}', function (searchTerm) {
    return CommonWebdriver.getDriver()
        .findElement(By.name('q'))
        .then(element => submit(element));
});

Then('the page title should start with {string}', function (expectedAnswer) {
    return CommonWebdriver.getDriver().getTitle().then(function (title) {
        assert.equal(title, "Google");
    });
});




