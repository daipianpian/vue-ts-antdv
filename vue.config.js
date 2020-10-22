//vue.config.js
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require("path");
const webpack = require('webpack');

function resolve(dir) {
   return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  // 输出文件目录
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  assetsDir: 'static',
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 开启 CSS source maps?
  css:{
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  devServer:{
    port: 8096,
    open: true, // 配置自动启动浏览器
    // host: '127.0.0.1',
    https: false, // https:{type:Boolean}
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {}
};