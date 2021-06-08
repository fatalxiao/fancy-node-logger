/**
 * @file webpack.base.config.js
 */

module.exports = {

    resolve: {
        extensions: ['.js']
    },

    module: {
        // 配置相应的规则
        rules: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                cacheDirectory: true
            }
        }]
    }

};
