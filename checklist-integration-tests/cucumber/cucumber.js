const CommonWebdriver = require('./features/common/CommonWebdriver');

try {
    CommonWebdriver.initDriver();
} catch (error) {
    console.log('Init webdriver failed. Below, the error : ');
    console.log(error);
}

module.exports = {
    default: `--format-options '{"snippetInterface": "synchronous"}'`
}