const Path = require('path');
const Base = require('./webpack.config.base');
const Merge = require('webpack-merge');

const Dev = {
    mode: 'development',
    devServer: {
        port: 8090,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
        static: {
            publicPath: '/',
            directory: Path.resolve(process.cwd(), './build/'),
        },
    },
};
module.exports = Merge.merge(Base, Dev);
