'use strict';

const buildStandardGelf = require('./standard-gelf');
const buildExpressMiddlewareGelf = require('./express-gelf');
const buildCustomGelf = require('./custom-gelf');

module.exports = function (opts) {
  return function (data) {
    const standardGelf = buildStandardGelf(data);

    const expressGelf = opts.useExpressMiddlewarePreset
      ? buildExpressMiddlewareGelf(data)
      : {};

    const customGelf = opts.customKeys.length > 0
      ? buildCustomGelf(data, opts.customKeys)
      : {};

    return Object.assign({}, standardGelf, expressGelf, customGelf);
  };
};
