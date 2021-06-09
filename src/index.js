/**
 * @file index.js
 */

// Vendors
const chalk = require('chalk');

class FancyNodeLogger {

    static TYPE = {
        NOTE: 'NOTE',
        INFO: 'INFO',
        SUCCESS: 'SUCCESS',
        WARNING: 'WARNING',
        ERROR: 'ERROR'
    };

    getMessages = (...args) => {
        switch (args?.length) {
            case 1:
                return [args[0]];
            case 2:
                return [args[0], null, args[1]];
            case 3:
                return [args[0], args[1], args[2]];
            default:
                return [];
        }
    };

    getDefaultSeverityStyle = type => {
        switch (type) {
            case FancyNodeLogger.TYPE.NOTE:
                return ['bgWhite', 'black'];
            case FancyNodeLogger.TYPE.INFO:
                return ['bgBlueBright', 'black'];
            case FancyNodeLogger.TYPE.SUCCESS:
                return ['bgGreenBright', 'black'];
            case FancyNodeLogger.TYPE.WARNING:
                return ['bgYellowBright', 'black'];
            case FancyNodeLogger.TYPE.ERROR:
                return ['bgRedBright', 'black'];
            default:
                return ['bgWhite', 'black'];
        }
    };

    getDefaultTitleStyle = type => {
        switch (type) {
            case FancyNodeLogger.TYPE.NOTE:
                return ['white'];
            case FancyNodeLogger.TYPE.INFO:
                return ['blueBright'];
            case FancyNodeLogger.TYPE.SUCCESS:
                return ['greenBright'];
            case FancyNodeLogger.TYPE.WARNING:
                return ['yellowBright'];
            case FancyNodeLogger.TYPE.ERROR:
                return ['redBright'];
            default:
                return ['white'];
        }
    };

    formatText = (text, styles) => {

        if (!text) {
            return '';
        }

        if (!styles || styles?.length < 1) {
            return text;
        }

        let chalkInstance = chalk;
        styles?.forEach(style => chalkInstance = chalkInstance?.[style]);

        if (!chalkInstance) {
            return text;
        }

        return chalkInstance('', text, '');

    };

    base = (severity, severityStyles, title, titleStyles, msg) => {

        const severityText = this.formatText(severity, severityStyles),
            titleText = this.formatText(title, titleStyles);

        console.log(`${severityText ? `${severityText} ` : ''}${titleText ? `${titleText} ` : ''}${msg}`);

    };

    output = (type, ...args) => {

        const [severity, title, msg] = this.getMessages(...args);

        this.base(
            severity, this.getDefaultSeverityStyle(type),
            title, this.getDefaultTitleStyle(type),
            msg
        );

    };

    note = (...args) => {
        this.output(FancyNodeLogger.TYPE.NOTE, ...args);
    };

    info = (...args) => {
        this.output(FancyNodeLogger.TYPE.INFO, ...args);
    };

    success = (...args) => {
        this.output(FancyNodeLogger.TYPE.SUCCESS, ...args);
    };

    warning = (...args) => {
        this.output(FancyNodeLogger.TYPE.WARNING, ...args);
    };

    error = (...args) => {
        this.output(FancyNodeLogger.TYPE.ERROR, ...args);
    };

}

module.exports = new FancyNodeLogger();
