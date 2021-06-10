/**
 * @file SeverityStyles.js
 */

// Statics
const Type = require('./Type');

module.exports = {
    [Type.VERBOSE]: ['bgWhite', 'black'],
    [Type.INFO]: ['bgBlueBright', 'black'],
    [Type.SUCCESS]: ['bgGreenBright', 'black'],
    [Type.WARNING]: ['bgYellowBright', 'black'],
    [Type.ERROR]: ['bgRedBright', 'black']
};
