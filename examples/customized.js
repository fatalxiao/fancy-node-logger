/**
 * @file customized.js
 */

'use strict';

// Vendors
const fancyNodeLogger = require('../src');

// create a self defined logger
const buildErrorLogger = fancyNodeLogger.createLogger(fancyNodeLogger.Type.ERROR, 'BUILD ERROR');
buildErrorLogger('Build Error Title', 'Build Error Message');

// regist the self defined logger
fancyNodeLogger.registLogger('buildError', buildErrorLogger);
fancyNodeLogger.buildError('Build Error Title', 'Build Error Message');
