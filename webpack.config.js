var path = require('path');
module.exports = {
    //打包的入口文件  String|Object
    entry: path.resolve(__dirname, '11.模块/two.js'),
    output: { //配置打包结果     Object
        //定义输出文件路径
        path: path.resolve(__dirname, '11.模块'),
        //指定打包文件名称
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    }
};