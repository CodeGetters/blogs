module.exports = {
    title: "JohnsonXin",
    description: "JohnsonXin的个人博客",
    theme: "reco",
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
    ]
}
