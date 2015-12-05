require('babel-core/register');

var requireDirectory = require('require-directory');

module.exports = requireDirectory(module, './lib');
