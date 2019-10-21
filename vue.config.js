const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        extract: false
    },
    // 修改 src 目录 为 examples 目录
    pages: {
        index: {
            entry: 'examples/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: (config) => {
        if (process.env.npm_config_report) {
            // ...    
            config.plugin('webpack-bundle-analyzer')
                .use(BundleAnalyzerPlugin) //使用webpack-bundle-analyzer 生成报表
        }
        config.resolve.alias
            .set('@', resolve('packages'))
    }
}