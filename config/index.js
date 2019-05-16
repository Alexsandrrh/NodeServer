const { argv } = require('yargs');
let config = {
  port: 80
};

if (argv.devserver) {
  config.port = 3000;
}

module.exports = config;
