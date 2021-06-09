'use strict';

const FancyNodeLogger = require('../dist');

// Without Title
FancyNodeLogger.note('Note Message');
FancyNodeLogger.verbose('Verbose Message');
FancyNodeLogger.info('Infomation Message');
FancyNodeLogger.success('Success Message');
FancyNodeLogger.done('Done Message');
FancyNodeLogger.warning('Warning Message');
FancyNodeLogger.error('Error Message');
FancyNodeLogger.failure('Failure Message');

// With Title
FancyNodeLogger.note('Note Title', 'Note Message');
FancyNodeLogger.verbose('Verbose Title', 'Verbose Message');
FancyNodeLogger.info('Infomation Title', 'Infomation Message');
FancyNodeLogger.success('Success Title', 'Success Message');
FancyNodeLogger.done('Done Title', 'Done Message');
FancyNodeLogger.warning('Warning Title', 'Warning Message');
FancyNodeLogger.error('Error Title', 'Error Message');
FancyNodeLogger.failure('Failure Title', 'Failure Message');
