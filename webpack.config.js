const path = require('path')

module.exports = {
    entry: ['babel-polyfill','./Development/JS/index.js'],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, './Development/JS')
    },
    devServer:{
        contentBase : './Development'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    }
}