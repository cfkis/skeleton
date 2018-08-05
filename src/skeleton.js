const fs = require('fs')
const path = require('path')
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
// 读取‘skeleton.json’, 以‘index.html’为模版写入内容
const renderer = createBundleRenderer(path.resolve(__dirname, '../dist/skeleton.json'), {
    template: fs.readFileSync( path.resolve(__dirname, '../index.html'), 'utf-8')
})
// 把模版内容渲染为html并写入’index.html‘
renderer.renderToString({}, (err, html) => {
    fs.writeFileSync('index.html', html, 'utf-8')
})