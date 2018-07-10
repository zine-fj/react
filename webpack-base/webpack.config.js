module.exports = {
    // _dirname
    entry: "./src/index.js",
    output: {
        path: "build",
        publicPath: "/build",
        filename: "app.js"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png)$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=4000" // 图片转换成base64格式字符上限设置
            }
        ]
    }
}