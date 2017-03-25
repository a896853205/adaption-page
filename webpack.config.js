/**
 * Created by HP on 2017/3/25.
 */
const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
    entry:'./src/js/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'js/[name]-[hash].js'
    },
    module: {
        rules:[
            // js引用
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets:['latest']
                }
            },
            // css引用(postcss有单独的配置文件)
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // 其他文件的引用
            {
                test: /\.(jpg|png|ttf)$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 500,
                            name: 'assets/[name]-[hash:5].[ext]'
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new hwp({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
};