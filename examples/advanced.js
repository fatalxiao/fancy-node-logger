/**
 * @file advanced.js
 */

'use strict';

// Vendors
const fancyNodeLogger = require('../src');

// Without Title
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'VERBOSE', 'Verbose Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'NOTE', 'Note Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'INFORMATION', 'Information Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'WAIT', 'Wait Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'SUCCESS', 'Success Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'DONE', 'Done Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'WARNING', 'Warning Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'ISSUE', 'Issue Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'ERROR', 'Error Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'FAILURE', 'Failure Message\n');

// With Title
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'VERBOSE', 'Verbose Title', 'Verbose Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.VERBOSE, 'NOTE', 'Note Title', 'Note Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'INFORMATION', 'Information Title', 'Information Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.INFO, 'WAIT', 'Wait Title', 'Wait Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'SUCCESS', 'Success Title', 'Success Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.SUCCESS, 'DONE', 'Done Title', 'Done Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'WARNING', 'Warning Title', 'Warning Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.WARNING, 'ISSUE', 'Issue Title', 'Issue Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'ERROR', 'Error Title', 'Error Message\n');
fancyNodeLogger.output(fancyNodeLogger.Type.ERROR, 'FAILURE', 'Failure Title', 'Failure Message\n');
