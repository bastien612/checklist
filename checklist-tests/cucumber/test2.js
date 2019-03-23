const { Builder, By, Key, until } = require('selenium-webdriver');
const CommonWebdriver = require('./features/common/CommonWebdriver');

(async function example() {
  let driver = CommonWebdriver.getDriver();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();