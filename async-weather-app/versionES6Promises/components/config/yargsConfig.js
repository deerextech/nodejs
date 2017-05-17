const yargs = require('yargs');

const argv = yargs
//address is required, can use a or address to fetch, and it must be a string
  .options({
  a:{
    demand: true,
    alias: 'address',
    describe:'Address to fetch weather for',
    string: true
  }
})
  .help()
  .alias('help', 'h')
  .argv;

  module.exports = {
    argv
  }
