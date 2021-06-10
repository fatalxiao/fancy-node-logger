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
fancyNodeLogger.registLogger(
    'buildError',
    fancyNodeLogger.createLogger(fancyNodeLogger.Type.ERROR, 'BUILD ERROR')
);
fancyNodeLogger.buildError('Build Error Title', 'Build Error Message\n');
