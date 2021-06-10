/**
 * @file customized.js
 */

'use strict';

// Vendors
const fancyNodeLogger = require('../src');

// create a self defined logger
const buildSuccessLogger = fancyNodeLogger.createLogger(fancyNodeLogger.Type.SUCCESS);
buildSuccessLogger('Build Success Title', 'Build Success Message\n');

// regist the self defined logger
const buildErrorLogger = fancyNodeLogger.createLogger(fancyNodeLogger.Type.ERROR, 'BUILD ERROR');
fancyNodeLogger.registLogger('buildError', buildErrorLogger);
fancyNodeLogger.buildError('Build Error Title', 'Build Error Message\n');
