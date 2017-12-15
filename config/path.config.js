var path = require('path')
// let rt = '/'
// let serverrt = path.resolve(__dirname, '..')
let rt = path.resolve(__dirname, '..') + '/'
let srcroot = rt + 'src/'
let distroot = rt + 'dist/'
module.exports = {
    root: rt,
    src: {
        root: srcroot,
        css: srcroot + 'css/',
        less: srcroot + 'less/',
        js: srcroot + 'js/',
        ejs: rt + 'src/ejs/',
        components: rt + 'src/ejs/components',
    },
    dist: {
        root: distroot,
        css: distroot + 'css/',
        js: distroot + 'js/',

    },
    server: {
        root: rt
    }
}