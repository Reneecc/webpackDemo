//webpack.config.js 入口文件路径和打包后存放的路径

//webpack2的配置
module.exports = {
    //'__dirname'是ndoe.js中的一个全局变量，它指向当前执行脚本所在目录
    entry: __dirname + "/app/main.js",//唯一的入口文件
    output: {
        path: __dirname + "/common",//打包后文件存放的地方
        filename: "index.js"//打包后输出文件的文件名
    }
}

//webpack4的配置
// module.exports = {
//     //webpack4需要添加mode配置，development是开发环境，production是生产环境
//     mode: "development",
//     entry: __dirname + "/app/main.js",//唯一的入口文件
//     output: {
//         path: __dirname + "/common",//打包后文件存放的地方
//         filename: "index.js"//打包后输出文件的文件名
//     }
// }

