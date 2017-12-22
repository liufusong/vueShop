var path = require('path');
// 导入自动生成HTMl文件的插件
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.resolve(__dirname, 'dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },plugins:[ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, 'src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        })
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
      rules: [ // 所有第三方模块的 匹配规则
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.vue$/, use: 'vue-loader' },
        { test: /\.(png|jpg|gif|ttf)$/, use: 'url-loader?limit=43960' }
      ]
    }
}