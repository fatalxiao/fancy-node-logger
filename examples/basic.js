/**
 * @file basic.js
 */

'use strict';

const fancyNodeLogger = require('../src');

// Without Title
fancyNodeLogger.verbose('Verbose Message');
fancyNodeLogger.note('Note Message');
fancyNodeLogger.info('Infomation Message');
fancyNodeLogger.wait('Wait Message');
fancyNodeLogger.success('Success Message');
fancyNodeLogger.done('Done Message');
fancyNodeLogger.warning('Warning Message');
fancyNodeLogger.issue('Issue Message');
fancyNodeLogger.error('Error Message');
fancyNodeLogger.failure('Failure Message');

// With Title
fancyNodeLogger.verbose('Verbose Title', 'Verbose Message');
fancyNodeLogger.note('Note Title', 'Note Message');
fancyNodeLogger.info('Infomation Title', 'Infomation Message');
fancyNodeLogger.wait('Wait Title', 'Wait Message');
fancyNodeLogger.success('Success Title', 'Success Message');
fancyNodeLogger.done('Done Title', 'Done Message');
fancyNodeLogger.warning('Warning Title', 'Warning Message');
fancyNodeLogger.issue('Issue Title', 'Issue Message');
fancyNodeLogger.error('Error Title', 'Error Message');
fancyNodeLogger.failure('Failure Title', 'Failure Message');
