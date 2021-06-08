/**
 * @file webpack.product.config.js
 */

// Statics
const baseConfig = require('./webpack.base.config.js');

// Vendors
const path = require('path');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {

    // 设置为生产模式
    mode: 'production',

    // 入口文件
    entry: {
        index: './src/index.js'
    },

    experiments: {
        outputModule: true
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        library: {
            type: 'module'
        },
        clean: true
    }

});
