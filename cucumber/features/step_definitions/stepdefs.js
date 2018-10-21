const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I am on the Google search page', function () {
    this.driver = new webdriver.Builder().build();
    this.driver.get('http://www.google.com');
});

When('I search for {string}', function (searchTerm) {
    let element = this.driver.findElement(webdriver.By.name('q'));
    element.sendKeys('Cheese!');
    element.submit();
});

Then('the page title should start with {string}', function (expectedAnswer) {
    this.driver.getTitle().then(function (title) {
        console.log('Page title is: ' + title);
    });

    this.driver.wait(function () {
        return driver.getTitle().then(function (title) {
            return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
        });
    }, 3000);

    this.driver.getTitle().then(function (title) {
        console.log('Page title is: ' + title);
        assertEquals(title, "cheese! - Google Search");
        // assertEquals(title, "chesee");
    });

    this.driver.quit();
});



