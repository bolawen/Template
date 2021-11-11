const Path = require('path');
const Base = require('./webpack.base');
const Merge = require('webpack-merge');

const Dev={
    mode:'development',
    devServer:{
        port:8090,
        static:{
            publicPath:'/',
            directory:Path.resolve(process.cwd(),'./build/')
        },
    }
}
module.exports=Merge.merge(Base,Dev);