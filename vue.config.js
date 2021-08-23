const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    publicPath: './',
    chainWebpack: (config) => {       
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@views', resolve('src/views'))
            .set('@img', resolve('src/assets/img'))
    },
    devServer: {
        hot: true, // 打开热更新,
        open: false,
        port: 8080,
        // proxy: devProxy(),
        // https: true,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
};
