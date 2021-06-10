/**
 * @file basic.js
 */

'use strict';

// Vendors
const fancyNodeLogger = require('../src');

// Without Title
fancyNodeLogger.verbose('Verbose Message\n');
fancyNodeLogger.note('Note Message\n');
fancyNodeLogger.info('Infomation Message\n');
fancyNodeLogger.wait('Wait Message\n');
fancyNodeLogger.success('Success Message\n');
fancyNodeLogger.done('Done Message\n');
fancyNodeLogger.warning('Warning Message\n');
fancyNodeLogger.issue('Issue Message\n');
fancyNodeLogger.error('Error Message\n');
fancyNodeLogger.failure('Failure Message\n');

// With Title
fancyNodeLogger.verbose('Verbose Title', 'Verbose Message\n');
fancyNodeLogger.note('Note Title', 'Note Message\n');
fancyNodeLogger.info('Infomation Title', 'Infomation Message\n');
fancyNodeLogger.wait('Wait Title', 'Wait Message\n');
fancyNodeLogger.success('Success Title', 'Success Message\n');
fancyNodeLogger.done('Done Title', 'Done Message\n');
fancyNodeLogger.warning('Warning Title', 'Warning Message\n');
fancyNodeLogger.issue('Issue Title', 'Issue Message\n');
fancyNodeLogger.error('Error Title', 'Error Message\n');
fancyNodeLogger.failure('Failure Title', 'Failure Message\n');
