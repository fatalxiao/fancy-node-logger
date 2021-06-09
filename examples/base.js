'use strict';

const FancyNodeLogger = require('../dist');

FancyNodeLogger.note('NOTE', 'Note Title', 'Note Message\n');
FancyNodeLogger.info('INFO', 'Infomation Title', 'Infomation Message\n');
FancyNodeLogger.success('Done', 'Success Title', 'Success Message\n');
FancyNodeLogger.warning('WARNING', 'Warning Title', 'Warning Message\n');
FancyNodeLogger.error('ERROR', 'Error Title', 'Error Message\n');
