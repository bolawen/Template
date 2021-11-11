const Base = require('./webpack.base');
const Merge = require('webpack-merge');

const Prod = {
    mode: 'production',
};
module.exports = Merge.merge(Base, Prod);
