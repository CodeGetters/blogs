module.exports = {
    title: "风和日暖，令人愿意永远活下去",
    description: "风里雨里，这里等你",
    theme: "reco",
    base: "/",
    head: [
        [
            "link", {rel: "icon", href: "/00.ico"},
            //移动端优化
            ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
            //搜索关键字
            ['meta', {name: 'keywords', content: 'JohnsonXin,博客'}],
        ]
    ],
    locale: {
        lang: "zh-CN",
    },
    themeConfig: {
        type: "blog",
        subSidebar: "auto",
        logo: "/avatar.jpg",
        authorAvatar: "/avatar.jpg",
        // 作者
        author: "JohnsonXin",
        nav: [
            {text: "首页", link: "/"},
            {
                text: "JohnsonXin 的小站",
                items: [
                    {
                        text: "掘金",
                        link: "https://juejin.cn/user/2573324506368663"
                    },
                    {
                        text: "GitHub",
                        link: "https://github.com/CodeGetters"
                    }
                ]
            }
        ],
        // 博客配置
        blogConfig: {
            category: {
                // 在导航栏菜单中所占的位置，默认2
                location: 2,
                // 默认文案 “分类”
                text: "博客",
            },
            tag: {
                // 在导航栏菜单中所占的位置，默认4
                location: 4,
                // 默认文案 “标签”
                text: "Tag",
            },
        },
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

    ]
}
