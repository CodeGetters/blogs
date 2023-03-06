module.exports = [
    ['link', {rel: 'icon', href: './favicon.ico'}],
    //移动端优化
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    //搜索关键字
    ['meta', {name: 'keywords', content: 'JohnsonXin,useBlog,vuepress,个人博客,reday,博客'}],
    //pwa
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'manifest', href: './manifest.json'}],
    //algolia
    ['link', {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3"}],
    ['script', {src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3"}],
    //解决 chrome 统计不准确的问题
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
    //图标
    ['link', {rel: "stylesheet", href: "//at.alicdn.com/t/c/font_3925150_svsn9ydx00l.css"}],
    //百度统计
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?bd54241f282e3115d4d11b5e182cd52a"; 
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`],
]
