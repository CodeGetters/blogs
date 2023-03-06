//const {readFileList, readTotalFileWords, readEachFileWords} = require('./theme/helpers/readFile.js');
const head = require('./configs/head.js');
const themeConfig = require('./configs/themeConfig.js');
const plugins=require('./configs/plugin.js')

module.exports = {
    base: '/',
    port: 3000,
    title: "风和日暖令人愿意永远活下去",
    description: "JohnsonXin的个人博客",
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true,
    },
    head,
    themeConfig,
    plugins
}

