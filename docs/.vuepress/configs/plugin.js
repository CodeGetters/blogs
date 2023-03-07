module.exports = [
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
    //["@vuepress-reco/vuepress-plugin-bgm-player", {
    //    audios: [
    //        {
    //            name: "萤火之森",
    //            artist: "CMJ",
    //            url: "https://assets.smallsunnyfox.com/music/3.mp3",
    //            cover: "https://txy.reday.asia/images/202302161730108.jpg"
    //
    //        },
    //        {
    //            name: "我再没见过 像你一般的星空",
    //            artist: "Seto",
    //            url: "https://assets.smallsunnyfox.com/music/2.mp3",
    //            cover: "https://assets.smallsunnyfox.com/music/2.jpg"
    //        }],
    //    // 是否默认缩小
    //    autoShrink: true,
    //    // 缩小时缩为哪种模式
    //    shrinkMode: "float",
    //    // 悬浮窗样式
    //    floatStyle: {bottom: "20px", "z-index": "999999"},
    //    //自动播放
    //    autoplay: false
    //}],
    [
        'meting',
        {

            //metingApi: 'https://api.injahow.cn/meting/',
            meting: {
                ////音乐源-netease(网易)-tencent-kugou-kuwo-baidu
                server: 'netease',
                ////资源类型-song-album-artist-playlist
                ////播放列表、单曲、专辑等
                type: 'playlist',
                ////资源id
                mid: '7389432797'
                //auto:"https://music.163.com/#/my/m/music/playlist?id=7389432797"
            },
            aplayer: {
                //设置 lrc 歌词解析模式
                lrcType: 3,
                //设置音频的预加载模式
                preload: "auto",
                //设置播放器的初始顺序模式
                order: "random",
                //设置播放器的初始循环模式
                loop: "all",
                autoplay: true,
                theme: '#0567f1'

                //是否开启迷你模式
                //mini:true,
                //是否开启吸底模式
                //fixed:true
            },
            mobile: {
                cover: false,
                lrc: true
            }
        }
    ],
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
    // 百度自动推送
    'vuepress-plugin-baidu-autopush',
    ['@vuepress-reco/vuepress-plugin-rss', {
        site_url: 'https://reday.asia',
        count: 1000
    }],
    ['sitemap', {
        hostname: 'https://reday.asia'
    },]
]
