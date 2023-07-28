const chalk = require('chalk');

const showError = (message, option) => {
    console.error(chalk.bold.red(message), chalk.bold.blue(option));
    return {};
};

const cli = args => {
    console.log(args);
};

module.exports = cli;