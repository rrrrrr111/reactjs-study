const path = require('path');
const PATHS = {
    app: "./js/app",
    build: path.join(__dirname, 'build')
};
module.exports = {
    devtool: 'source-map',
    entry: {
        app: PATHS.app
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    }
};