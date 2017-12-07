const path = require('path');
const PATHS = {
    app: "./js/app",
    build: path.join(__dirname, 'build')
};
module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    }
};