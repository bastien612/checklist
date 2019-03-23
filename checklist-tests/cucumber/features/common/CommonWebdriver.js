const { Capabilities, By, Builder } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const assert = require('assert');
const { configs } = require('./configs');


class CommonWebdriver {
    initDriver() {
        console.log('initDriver');
        let builder = new Builder();

        let options = new chrome.Options().headless;
        builder.forBrowser('chrome');
        try {
            builder
                .withCapabilities(
                    Capabilities.chrome().setBrowserVersion('70.0.3538.77')
                )
                .setChromeOptions(options)
                .usingServer(configs.SELENIUM_HUB_URL + '/wd/hub');
        } catch (error) {
            console.log("Erreur dans l'initialisation du webdriver :");
            console.log(error);
        }

        // let options = new firefox.Options();
        // builder.forBrowser('firefox');
        // builder
        //   .withCapabilities(Capabilities.firefox().setBrowserVersion('64.0'))
        //   .setFirefoxOptions(options)
        //   .usingServer(configs.SELENIUM_HUB_URL + '/wd/hub');

        try {
            this.driver = builder.build();
        } catch (error) {
            console.log('Erreur lors du build du webdriver :');
            console.log(error);
        }

        return true;
    }

    toUri(uri) {
        const url = configs.BASE_URL + uri;
        console.log("l'url : " + url);
        return this.getDriver().get(url);
    }

    getDriver() {
        if (!this.driver) {
            initDriver();
        }

        return this.driver;
    }

    loggin(username, password) {
        this.driver
            .findElement(By.id('username'))
            .then(element => this.writeInput(element, username))
            .then(() => this.driver.findElement(By.id('password')))
            .then(element => this.writeInput(element, password))
            .then(() => this.driver.findElement(By.id('CONNEXION')))
            .then(element => element.click())
            .then(() => this.driver.findElement(By.id('deconnexionButton')))
            .then(element => assert.notEqual(element, undefined));
    }

    async logout() {
        return this.driver
            .findElement(By.id('deconnexionButton'))
            .then(element => element.click());
    }

    async writeInput(webElement, input) {
        await webElement.sendKeys(input);
        return webElement;
    }

    quit() {
        this.driver.quit();
    }

}



module.exports = new CommonWebdriver();