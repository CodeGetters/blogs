const {readFileList, readTotalFileWords, readEachFileWords} = require('./theme/helpers/readFile.js');

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
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        //移动端优化
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        //搜索关键字
        ['meta', {name: 'keywords', content: 'JohnsonXin,useBlog,vuepress,个人博客,reday,博客'}],
        //pwa
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
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
        })();`]
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        // 站点配置（首页 & 文章页）
        blogInfo: {
            blogCreate: '2023-01-24', // 博客创建时间
            indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
            pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
            readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
            eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
            mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
            totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
            moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
            // 下面两个选项：第一次获取访问量失败后的迭代时间
            indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
            pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
            // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
        },

        //显示所有页面的标题链接
        displayAllHeaders: false,
        type: "blog",
        //搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 备案
        record: '黔ICP备2023000823号-1',
        recordLink: 'https://beian.miit.gov.cn/',
        cyberSecurityRecord: '贵公网安备 52033002001228号',
        cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=52033002001228',
        // 最后更新时间
        lastUpdated: '上次更新',
        logo: "https://txy.reday.asia/images/202302161730107.jpg",
        authorAvatar: "https://txy.reday.asia/images/202302161730107.jpg",
        // 作者
        author: "JohnsonXin",
        subSidebar: 'auto',
        sidebarDepth: 4,
        nav: [
            {text: "首页", link: "/", icon: "reco-home"},
            {
                text: '笔记',
                icon: 'reco-document',
                items: [
                    {text: 'HTML', link: "/blogs/html/01.html"},
                    {text: "CSS", link: "/blogs/css/01.html"},
                    {text: "JS", link: "/blogs/js/01.html"},
                    {text: "多人协作", link: "/blogs/cooperation/01Git.html"},
                    {text: "博客", link: "/blogs/useBlog/01使用vuepress打造属于自己的博客.html"},
                    {text: "linux", link: "/blogs/linux/01linux无法联网解决方案.html"},
                ]
            },
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
            {text: "面包屋", link: "/books/目录.html", icon: 'reco-other'},
            {
                text: "面面面",
                icon: 'reco-three',
                items: [
                    {text: "算法", link: "/interview/leetcode/目录.html"},
                    {text: "面经", link: "/interview/moreau/目录.html"}

                ]
            },
            {
                text: "关于本站",
                link: "/view/",
                icon: "reco-mail",
                items: [
                    {text: "关于我", link: "/view/aboutMyself.html"},
                    {text: "碎碎念念", link: "/view/moodWall.html"},
                    {text: "友人帐", link: "/view/friendLinks.html"},
                    {text: "建站史", link: "/view/aboutSite.html"},
                    {text: "站点监控", link: "https://kuma.reday.asia/status/page"}
                ]
            },

        ],
        // 博客配置
        blogConfig: {
            category: {
                // 在导航栏菜单中所占的位置，默认2
                location: 2,
                // 默认文案 “分类”
                text: "分类"
            },
            socialLinks: [
                {icon: 'reco-wechat', link: "https://txy.reday.asia/images/202302191652771.png"},
                {icon: 'reco-github', link: "https://github.com/CodeGetters"},
                {icon: 'reco-juejin', link: "https://juejin.cn/user/2573324506368663"},
                {icon: 'reco-mail', link: "mailto:yuanxin0521@qq.com"},
            ]
        },
        valineConfig: {
            appId: 'sEH0f9Yv07EJH6PJX5VPpApE-gzGzoHsz',
            appKey: 'HFSmme1Q9TsSXSwEsl1tNDnK',
            placeholder: '在昵称处填写QQ号自动获取邮箱和QQ昵称\n收到回复将会发送到您的邮箱\n请注意文明用语',
            //昵称框自动获取qq昵称和qq头像
            enableQQ: true,
            //验证码
            verify: true,
            //记录评论者IP
            recordIP: true,
            //文章访问量统计
            visitor: true,
            //Gravatar头像展示方式
            avatar: "mp",
            //表情CDN
            emojiCDN: '//i0.hdslb.com/bfs/emote/',
            //必填项
            requiredFields: ['nick', 'mail'],
            // 表情title和图片映射
            emojiMaps: {
                "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
                "tv_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
                "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
                "tv_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
                "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
                "tv_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
                "tv_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
                "tv_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
                "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
                "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
                "tv_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
                "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
                "tv_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
                "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
                "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
                "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
                "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
                "tv_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
                "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
                "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
                "tv_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
                "tv_打脸": "56ab10b624063e966bfcb76ea5dc4794d87dfd47.png",
                "tv_抓狂": "fe31c08edad661d63762b04e17b8d5ae3c71a757.png",
                "tv_抠鼻": "c666f55e88d471e51bbd9fab9bb308110824a6eb.png",
                "tv_斜眼笑": "911f987aa8bc1bee12d52aafe62bc41ef4474e6c.png",
                "tv_无奈": "ea8ed89ee9878f2fece2dda0ea8a5dbfe21b5751.png",
                "tv_晕": "5443c22b4d07fb1907ccc610c8e6db254f2461b7.png",
                "tv_流汗": "cead1c351ab8d79e9f369605beb90148db0fbed3.png",
                "tv_流泪": "7e71cde7858f0cd50d74b0264aa26db612a8a167.png",
                "tv_流鼻血": "c32d39db2737f89b904ca32700d140a9241b0767.png",
                "tv_点赞": "f85c354995bd99e28fc76c869bfe42ba6438eff4.png",
                "tv_生气": "26702dcafdab5e8225b43ffd23c94ac1ff932654.png",
                "tv_生病": "8b0ec90e6b86771092a498c54f09fc94621c1900.png",
                "tv_疑问": "0793d949b18d7be716078349c202c15ff166f314.png",
                "tv_白眼": "c1d59f439e379ee50eef488bcb5e5378e5044ea4.png",
                "tv_皱眉": "72ccad6679fea0d14cce648b4d818e09b8ffea2d.png",
                "tv_目瞪口呆": "0b8cb81a68de5d5365212c99375e7ace3e7891b7.png",
                "tv_睡着": "8b196675b53af58264f383c50ad0945048290b33.png",
                "tv_笑哭": "1abc628f6d4f4caf9d0e7800878f4697abbc8273.png",
                "tv_腼腆": "89712c0d4af73e67f89e35cbc518420380a7f6f4.png",
                "tv_色": "61822c7e9aae5da76475e7892534545336b23a6f.png",
                "tv_调侃": "4bc022533ef31544ca0d72c12c808cf4a1cce3e3.png",
                "tv_调皮": "b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png",
                "tv_鄙视": "6e72339f346a692a495b123174b49e4e8e781303.png",
                "tv_闭嘴": "c9e990da7f6e93975e25fd8b70e2e290aa4086ef.png",
                "tv_难过": "87f46748d3f142ebc6586ff58860d0e2fc8263ba.png",
                "tv_馋": "fc7e829b845c43c623c8b490ee3602b7f0e76a31.png",
                "tv_鬼脸": "0ffbbddf8a94d124ca2f54b360bbc04feb6bbfea.png",
                "tv_黑人问号": "45821a01f51bc867da9edbaa2e070410819a95b2.png",
                "tv_鼓掌": "1d21793f96ef4e6f48b23e53e3b9e42da833a0f6.png"
            }
        },
    },
    plugins: [
        // 更新刷新插件
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }],
        // 代码复制弹窗插件
        ['vuepress-plugin-nuggets-style-copy', {
            copyText: 'copy',
            tip: {
                content: '复制成功！本站所有文章除特别声明外，均采用 (CC)BY-NC-SA 许可协议。转载请注明出处！'
            }
        }],
        ['@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    return (new Date(timestamp)).toUTCString()
                }
            }],
        ['@vuepress-reco/vuepress-plugin-pagation', {
            perPage: 18
        }],
        ['sitemap', {
            hostname: 'https://reday.asia'
        }],
        //樱花飘落
        ["sakura", {
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
        }],
        //鼠标点击
        ["cursor-effects", {
            size: 4, // size of the particle, default: 2
            shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }],
        //音乐播放器
        ["@vuepress-reco/vuepress-plugin-bgm-player", {
            audios: [
                {
                    name: "萤火之森",
                    artist: "CMJ",
                    url: "https://assets.smallsunnyfox.com/music/3.mp3",
                    cover: "https://txy.reday.asia/images/202302161730108.jpg"

                },
                {
                    name: "我再没见过 像你一般的星空",
                    artist: "Seto",
                    url: "https://assets.smallsunnyfox.com/music/2.mp3",
                    cover: "https://assets.smallsunnyfox.com/music/2.jpg"
                }],
            // 是否默认缩小
            autoShrink: true,
            // 缩小时缩为哪种模式
            shrinkMode: "float",
            // 悬浮窗样式
            floatStyle: {bottom: "20px", "z-index": "999999"},
            //自动播放
            autoplay: false
        }],
        //著作权信息
        ['copyright', {
            // 选中的文字将无法被复制
            authorName: 'JohnsonXin',
            // 如果长度超过  20 个字符
            minLength: 20,
        }],
        //看板娘
        ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
            theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
        }],
        //时间提醒
        {
            name: 'custom-plugins',
            globalUIComponents: ["GlobalTip"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        },
        [
            "seo1",
            {
                hostname:"https://reday.asia",
                author:"JohnsonXin",
                restrictions:"13+"
            },
        ],
    ]
}

