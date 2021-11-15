const Base = require('./webpack.config.base');
const Merge = require('webpack-merge');

const Prod = {
    mode: 'production',
};
module.exports = Merge.merge(Base, Prod);
