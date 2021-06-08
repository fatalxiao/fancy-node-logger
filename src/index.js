/**
 * @file index.js
 */

// Vendors
import chalk from 'chalk';

class FancyNodeLog {

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
            case Index.TYPE.NOTE:
                return ['bgWhite', 'black'];
            case Index.TYPE.INFO:
                return ['bgBlueBright', 'black'];
            case Index.TYPE.SUCCESS:
                return ['bgGreenBright', 'black'];
            case Index.TYPE.WARNING:
                return ['bgYellowBright', 'black'];
            case Index.TYPE.ERROR:
                return ['bgRedBright', 'black'];
            default:
                return ['bgWhite', 'black'];
        }
    };

    getDefaultTitleStyle = type => {
        switch (type) {
            case Index.TYPE.NOTE:
                return ['white'];
            case Index.TYPE.INFO:
                return ['blueBright'];
            case Index.TYPE.SUCCESS:
                return ['greenBright'];
            case Index.TYPE.WARNING:
                return ['yellowBright'];
            case Index.TYPE.ERROR:
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
        this.output(Index.TYPE.NOTE, ...args);
    };

    info = (...args) => {
        this.output(Index.TYPE.INFO, ...args);
    };

    success = (...args) => {
        this.output(Index.TYPE.SUCCESS, ...args);
    };

    warning = (...args) => {
        this.output(Index.TYPE.WARNING, ...args);
    };

    error = (...args) => {
        this.output(Index.TYPE.ERROR, ...args);
    };

}

export default new FancyNodeLog();
