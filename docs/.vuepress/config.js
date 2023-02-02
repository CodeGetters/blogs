module.exports = {
    theme: "reco",
    base: "/",
    head: [
        ["link", {rel: "icon", href: "https://cdn.jsdelivr.net/gh/CodeGetters/blogs-cdn/images/00.ico"},],
        //pwa
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        //移动端优化
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        //搜索关键字
        ['meta', {name: 'keywords', content: 'JohnsonXin,博客,vuepress,个人博客'}],
        //pwa
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ],
    locales: {
        "/": {
            lang: "zh-CN",
            title: "风和日暖，令人愿意永远活下去",
            description: "JohnsonXin的个人博客"
        }
    },
    themeConfig: {
        type: "blog",
        //搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 最后更新时间
        lastUpdated: '上次更新',
        logo: "https://cdn.jsdelivr.net/gh/CodeGetters/blogs-cdn/images/avatar.jpg",
        authorAvatar: "https://cdn.jsdelivr.net/gh/CodeGetters/blogs-cdn/images/avatar.jpg",
        // 作者
        author: "JohnsonXin",
        startYear: "2023",
        valineConfig: {
            appId: 'sEH0f9Yv07EJH6PJX5VPpApE-gzGzoHsz',
            appKey: 'HFSmme1Q9TsSXSwEsl1tNDnK',
            placeholder: '在这里留下你的足迹吧！',
            //邮件提醒
            notify: true,
            //验证码
            verify: true,
            recordIP: true,
            visitor: true
        },
        nav: [
            {text: "首页", link: "/", icon: "reco-home"},
            {text: '笔记', link: '/note/', icon: 'reco-document'},
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
            {text: "关于", link: "/about/", icon: "reco-account"},
            {
                text: "JohnsonXin的小站",
                items: [{text: "掘金", link: "https://juejin.cn/user/2573324506368663"}, {
                    text: "GitHub",
                    link: "https://github.com/CodeGetters"
                }]
            },
        ],
        friendLink: [
            {
                title: "vuepress",
                desc: "Vue-powered Static Site Generator",
                logo: "https://vuepress.vuejs.org/logo.png",
                link: "https://vuepress.vuejs.org/zh/"
            },
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        //自动形成侧边栏
        subSidebar: "auto",
        sidebarDepth: 1,
        //显示所有页面的标题链接
        displayAllHeaders: false,
        sidebar: {
            "/note/": [
                {
                    title: "html",
                    collapse: true,
                    children: ['html/01', 'html/02']
                }
            ]
        },
        // 博客配置
        blogConfig: {
            category: {
                // 在导航栏菜单中所占的位置，默认2
                location: 2,
                // 默认文案 “分类”
                text: "分类",
            },
            tag: {
                // 在导航栏菜单中所占的位置，默认4
                location: 4,
                // 默认文案 “标签”
                text: "标签",
            },
        },
    },
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        [
            "sakura",
            {
                // 默认数量
                num: 20,
                //  是否显示
                show: true,
                // 层级
                zIndex: -1,
                img: {
                    // false 默认图 true 换图 需要填写httpUrl地址
                    replace: false,
                },
            },
        ],
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
        [
            //音乐播放器
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
                audios: [
                    {
                        name: "萤火之森",
                        artist: "CMJ",
                        url: "https://assets.smallsunnyfox.com/music/3.mp3",
                        cover: "https://assets.smallsunnyfox.com/music/3.jpg"

                    },
                    {
                        name: "我再没见过 像你一般的星空",
                        artist: "Seto",
                        url: "https://assets.smallsunnyfox.com/music/2.mp3",
                        cover: "https://assets.smallsunnyfox.com/music/2.jpg"
                    },
                ],
                // 是否默认缩小
                autoShrink: true,
                // 缩小时缩为哪种模式
                shrinkMode: "float",
                // 悬浮窗样式
                floatStyle: {bottom: "20px", "z-index": "999999"},
                //自动播放
                autoplay: true
            },
        ],
        [
            //百度统计
            'vuepress-plugin-baidu-tongji',
            {
                hm: "2465e092f70686717972961b02e1076a"
            }
        ],
        //页面切换进度条
        '@vuepress/plugin-nprogress',
        [
            //点击复制代码
            'one-click-copy',
            {
                copySelector: [
                    'div[class*="language-"] pre',
                    'div[class*="aside-code"] aside',
                ],
                copyMessage: '复制成功',
                duration: 1000,
                showInMobile: false,
            }
        ],
        [
            //著作权信息
            'copyright',
            {
                // 选中的文字将无法被复制
                authorName: 'JohnsonXin',
                // 如果长度超过  20 个字符
                minLength: 15,
            },
        ],
        [
            //看板娘
            '@vuepress-reco/vuepress-plugin-kan-ban-niang',
            {
                theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
            }
        ],
        //[
        //    //评论
        //    'vuepress-plugin-comment',
        //    {
        //        choosen: 'valine',
        //        // options选项中的所有参数，会传给Valine的配置
        //        options: {
        //            el: '#valine-vuepress-comment',
        //            appId: 'sEH0f9Yv07EJH6PJX5VPpApE-gzGzoHsz',
        //            appKey: 'HFSmme1Q9TsSXSwEsl1tNDnK',
        //            avatar: "retro",
        //            placeholder: "在这里留下你的足迹吧！",
        //            enableQQ: true,
        //            //serverURLs:"https://leanserver.reday.asia"
        //        }
        //    }
        //],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: '发现新内容可用',
                    buttonText: '刷新'
                }
            }
        ]
    ]
}
