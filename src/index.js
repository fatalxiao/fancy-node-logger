/**
 * @file index.js
 */

'use strict';

// Vendors
const chalk = require('chalk');

/**
 * FancyNodeLogger class
 */
class FancyNodeLogger {

    static TYPE = {
        NOTE: 'NOTE',
        INFO: 'INFO',
        SUCCESS: 'SUCCESS',
        WARNING: 'WARNING',
        ERROR: 'ERROR'
    };

    /**
     * parse title and messages by args
     * @param args
     * @returns {*[]|[*]|[*, *, *]|[*, null, *]}
     */
    parseMessages = (...args) => {
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

    /**
     * get default severity style
     * @param type
     * @returns {string[]}
     */
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

    /**
     * get default title style
     * @param type
     * @returns {[string]}
     */
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

    /**
     * format log text
     * @param text
     * @param styles
     * @returns {string|*}
     */
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

    /**
     * base function to print log
     * @param severity
     * @param severityStyles
     * @param title
     * @param titleStyles
     * @param msg
     * @param msgStyles
     */
    print = (severity, severityStyles, title, titleStyles, msg, msgStyles) => {

        const severityData = this.formatText(severity, severityStyles),
            severityText = severityData ? `${severityData} ` : '',

            titleData = this.formatText(title, titleStyles),
            titleText = titleData ? `${titleData} ` : '',

            msgData = this.formatText(msg, msgStyles),
            msgText = msgData ? `\n${msgData}\n` : '';

        console.log(`${severityText}${titleText}${msgText}`);

    };

    /**
     * base function to print a log by a customized type
     * @param type
     * @param args
     */
    output = (type, ...args) => {

        const [severity, title, msg] = this.parseMessages(...args);

        this.print(
            severity, this.getDefaultSeverityStyle(type),
            title, this.getDefaultTitleStyle(type),
            msg
        );

    };

    /**
     * print a note type log
     * @param args
     */
    note = (...args) => {
        this.output(FancyNodeLogger.TYPE.NOTE, 'NOTE', ...args);
    };

    /**
     * print a verbose type log
     * @param args
     */
    verbose = (...args) => {
        this.output(FancyNodeLogger.TYPE.NOTE, 'VERBOSE', ...args);
    };

    /**
     * print an information type log
     * @param args
     */
    info = (...args) => {
        this.output(FancyNodeLogger.TYPE.INFO, 'INFO', ...args);
    };

    /**
     * print a success type log
     * @param args
     */
    success = (...args) => {
        this.output(FancyNodeLogger.TYPE.SUCCESS, 'SUCCESS', ...args);
    };

    /**
     * print a done type log
     * @param args
     */
    done = (...args) => {
        this.output(FancyNodeLogger.TYPE.SUCCESS, 'DONE', ...args);
    };

    /**
     * print a warning type log
     * @param args
     */
    warning = (...args) => {
        this.output(FancyNodeLogger.TYPE.WARNING, 'WARNING', ...args);
    };

    /**
     * print an error type log
     * @param args
     */
    error = (...args) => {
        this.output(FancyNodeLogger.TYPE.ERROR, 'ERROR', ...args);
    };

    /**
     * print an failure type log
     * @param args
     */
    failure = (...args) => {
        this.output(FancyNodeLogger.TYPE.ERROR, 'FAILURE', ...args);
    };

}

module.exports = new FancyNodeLogger();
