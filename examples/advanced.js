/**
 * @file advanced.js
 */

'use strict';

// Vendors
const fancyNodeLogger = require('../src');

// Without Title
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'VERBOSE', 'Verbose Message');
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'NOTE', 'Note Message');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'INFORMATION', 'Information Message');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'WAIT', 'Wait Message');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'SUCCESS', 'Success Message');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'DONE', 'Done Message');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'WARNING', 'Warning Message');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'ISSUE', 'Issue Message');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'ERROR', 'Error Message');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'FAILURE', 'Failure Message');

// With Title
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'VERBOSE', 'Verbose Title', 'Verbose Message');
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'NOTE', 'Note Title', 'Note Message');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'INFORMATION', 'Information Title', 'Information Message');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'WAIT', 'Wait Title', 'Wait Message');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'SUCCESS', 'Success Title', 'Success Message');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'DONE', 'Done Title', 'Done Message');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'WARNING', 'Warning Title', 'Warning Message');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'ISSUE', 'Issue Title', 'Issue Message');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'ERROR', 'Error Title', 'Error Message');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'FAILURE', 'Failure Title', 'Failure Message');
