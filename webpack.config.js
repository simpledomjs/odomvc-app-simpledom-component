var webpack = require('webpack');

var entries = {
    'app': ['./src/index.js']
};

module.exports = {
    output: {
        path: './js/',
        filename: '[name].js'
    },
    entry: entries,
    resolve: {
        extensions: ['','.js']  // handle all those extensions
    },
    module: {
        loaders: [
            {
                // preprocess all files with babel to turn ES6 code into ES5 code
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['stage-0', 'es2015'],
                    plugins: [
                        ["transform-react-jsx", { "pragma": "el" }],
                        "babel-plugin-add-module-exports",
                        "transform-class-properties"
                    ]
                }
            }
        ]
    }
};
