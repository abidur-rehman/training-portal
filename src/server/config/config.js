const _ = require('lodash');
const config = require('./config.json');

const defaultConfig = config.default;
const environment = process.env.NODE_ENV || 'development';

const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);
console.log(`Config finalConfig ${JSON.stringify(finalConfig)}`);
const envConfig = function() {
  global.gConfig = finalConfig;
}
module.exports = envConfig;
