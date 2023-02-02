// enhanceApp.js
import Router from 'vue-router'

const router = new Router({
    mode: 'history'
})

export default ({router}) => {
    router.beforeEach((to, from, next) => {
        // 执行百度的pv统计
        if (typeof _hmt != "undefined" && to.path) {
            // decodeURIComponent 解密 to.fullPath，防止上报的 to.fullPath 路径为浏览器 encodeURIComponent 后的路径
            _hmt.push(["_trackPageview", decodeURIComponent(to.fullPath)]);
        }
        next()
    })
}
