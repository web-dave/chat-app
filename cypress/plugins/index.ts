// Plugins enable you to tap into, modify, or extend the internal behavior of Cypress
// For more info, visit https://on.cypress.io/plugins-api
// module.exports = (on, config) => {}
// const webpackConfig = require('./webpack.config');
// const { startDevServer } = require('@cypress/webpack-dev-server');
import { startDevServer } from '@cypress/webpack-dev-server';
import * as webpackConfig from './webpack.config';

module.exports = (on: any, config: any) => {
  on('dev-server:start', (options: any) =>
    startDevServer({
      options,
      webpackConfig,
    })
  );
  return config;
};
