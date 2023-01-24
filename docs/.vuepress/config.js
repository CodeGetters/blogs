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
                        name: "我再没见过 想你一本的星空",
                        artist: "Seto",
                        url: "https://assets.smallsunnyfox.com/music/2.mp3",
                        cover: "https://assets.smallsunnyfox.com/music/2.jpg"
                    },
                    {
                        name: "Hear Me Now",
                        artist: "Alok / Zeeba / Bruno Martini",
                        //url: "https://sr-sycdn.kuwo.cn/2de791887191dd6da661970b37f98673/63cf4c20/resource/n2/26/68/3129151473.mp3",
                        url: "Hear Me Now.mp3",
                        cover: "http://p1.music.126.net/jB45ubgQ30qsGrv7MBkhEQ==/109951164852474437.jpg?param=130y130"
                    },
                    {
                        name: "Diary of a poor kid",
                        artist: "Papa Khan",
                        //url: "https://cw-sycdn.kuwo.cn/fe435b5743a07f8ef4420b18fcd232e7/63cf4bc1/resource/n3/2/98/2383933166.mp3",
                        url: "/Diary of a poor kid.mp3",
                        cover: "http://p3.music.126.net/QmRNo3rHpNpt3VcRhd0BiA==/109951165406228694.jpg?param=300x300"
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
    ]
}
