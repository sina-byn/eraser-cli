const arg = require('arg');
const chalk = require('chalk');
const { erase } = require('comment-eraser');

const options = ['-c', '--config'];

const showError = (message, option) => {
  console.error(chalk.bold.red(message), chalk.bold.blue(option));
  return {};
};

const parseArgsIntoOptions = rawArgs => {
  rawArgs = rawArgs.slice(2);
  const lastArg = rawArgs[rawArgs.length - 1];

  if (options.includes(lastArg)) {
    return showError('option requires argument:', '-c | --config');
  }

  const args = arg(
    {
      '--config': String,
      '-c': '--config',
    },
    { argv: rawArgs, permissive: true }
  );

  if (!('--config' in args)) {
    return showError('missing required argument:', '-c | --config');
  }

  return {
    configPath: args['--config'] || 'eraser.config.json',
  };
};

const cli = args => {
  const { configPath = null } = parseArgsIntoOptions(args);

  if (!configPath) return;
  erase(configPath);
};

module.exports = cli;
