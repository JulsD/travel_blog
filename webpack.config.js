const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common.js');
const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.prod.js');

module.exports = ({dev, prod}) => {
  switch(true) {
    case dev:
      return merge(commonConfig, devConfig);
    case prod:
      return merge(commonConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}