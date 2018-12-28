const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

async function submit(element){
    await element.sendKeys('Cheese!').then(function(){
        element.submit();
    })
    
}

Given('I am on the Google search page', function () {
    this.driver = new webdriver.Builder().forBrowser('chrome').build();
    return this.driver.get('http://www.google.com');
});

When('I search for {string}', function (searchTerm) {
    return this.driver.findElement(By.name('q')).then(element => submit(element))
});

Then('the page title should start with {string}', function (expectedAnswer) {
    return this.driver.getTitle().then(function (title) {
        assert.equal(title, "Cheese! - Recherche Google");
    });
});




