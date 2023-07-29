# eraser-cli [![NPM version](https://img.shields.io/npm/v/eraser-cli.svg?style=flat)](https://www.npmjs.com/package/eraser-cli) [![NPM monthly downloads](https://img.shields.io/npm/dm/eraser-cli.svg?style=flat)](https://npmjs.org/package/eraser-cli) [![NPM total downloads](https://img.shields.io/npm/dt/eraser-cli.svg?style=flat)](https://npmjs.org/package/eraser-cli) 

> the cli tool for the [comment-eraser](https://www.npmjs.com/package/comment-eraser) package - easily integrate the comment-eraser into your build process or install it globally and use it wherever you want

Please consider following this project's author, [Sina Bayandorian](https://github.com/sina-byn), and consider starring the project to show your :heart: and support.

## Install
```sh
$ npm install -g eraser-cli
```

## Usage
```sh
// falls back to the default config
$ eraser-cli
```

## Options

`-c | --config`: **String -** optional **-** path to the configuration file
* default is `'eraser.config.json'`

## API
the api behind this cli tool is the [comment-eraser](https://www.npmjs.com/package/comment-eraser) package
* this cli tool utilizes the [erase](https://www.npmjs.com/package/comment-eraser#erase) function from the given package
* the configuration file is the same as the comment-eraser [configuration](https://www.npmjs.com/package/comment-eraser#configuration) file