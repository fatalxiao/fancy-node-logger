'use strict';

const FancyNodeLogger = require('../dist');

FancyNodeLogger.note('Note Title', 'Note Message');
FancyNodeLogger.verbose('Verbose Title', 'Verbose Message');
FancyNodeLogger.info('Infomation Title', 'Infomation Message');
FancyNodeLogger.success('Success Title', 'Success Message');
FancyNodeLogger.done('Done Title', 'Done Message');
FancyNodeLogger.warning('Warning Title', 'Warning Message');
FancyNodeLogger.error('Error Title', 'Error Message');
FancyNodeLogger.failure('Failure Title', 'Failure Message');
