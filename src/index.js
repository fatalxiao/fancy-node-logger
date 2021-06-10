/**
 * @file index.js
 */

'use strict';

// Statics
const Type = require('./Type');
const SeverityStyles = require('./SeverityStyles');
const TitleStyles = require('./TitleStyles');

// Vendors
const chalk = require('chalk');

/**
 * FancyNodeLogger class
 */
class FancyNodeLogger {

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
            msgText = msgData ? `${titleData ? '\n' : ''}${msgData}\n` : '';

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
            severity, SeverityStyles[type],
            title, TitleStyles[type],
            msg
        );

    };

    /**
     * create an self defined logger
     * @param type
     * @param severity
     * @returns {function(...[*]): void}
     */
    createLogger = (type, severity) => {
        return (...args) => this.output(type, severity, ...args);
    };

    /**
     * regist self defined logger to instance
     * @param name
     * @param logger
     */
    registLogger = (name, logger) => {
        return this[name] = logger;
    };

    /**
     * print a verbose log
     * @param args
     */
    verbose = (...args) => {
        this.output(Type.VERBOSE, 'VERBOSE', ...args);
        return this;
    };

    /**
     * print a note log
     * @param args
     */
    note = (...args) => {
        this.output(Type.VERBOSE, 'NOTE', ...args);
        return this;
    };

    /**
     * print an information log
     * @param args
     */
    info = (...args) => {
        this.output(Type.INFO, 'INFO', ...args);
        return this;
    };

    /**
     * print a wait log
     * @param args
     */
    wait = (...args) => {
        this.output(Type.INFO, 'WAIT', ...args);
        return this;
    };

    /**
     * print a success log
     * @param args
     */
    success = (...args) => {
        this.output(Type.SUCCESS, 'SUCCESS', ...args);
        return this;
    };

    /**
     * print a done log
     * @param args
     */
    done = (...args) => {
        this.output(Type.SUCCESS, 'DONE', ...args);
        return this;
    };

    /**
     * print a warning log
     * @param args
     */
    warning = (...args) => {
        this.output(Type.WARNING, 'WARNING', ...args);
        return this;
    };

    /**
     * print an issue log
     * @param args
     */
    issue = (...args) => {
        this.output(Type.WARNING, 'ISSUE', ...args);
        return this;
    };

    /**
     * print an error log
     * @param args
     */
    error = (...args) => {
        this.output(Type.ERROR, 'ERROR', ...args);
        return this;
    };

    /**
     * print a failure log
     * @param args
     */
    failure = (...args) => {
        this.output(Type.ERROR, 'FAILURE', ...args);
        return this;
    };

}

const fancyNodeLogger = new FancyNodeLogger();
fancyNodeLogger.Type = Type;
fancyNodeLogger.SeverityStyles = SeverityStyles;
fancyNodeLogger.TitleStyles = TitleStyles;

module.exports = fancyNodeLogger;
