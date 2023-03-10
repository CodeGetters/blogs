---
title: 使用vuepress打造属于自己的博客
date: 2023-1-24
categories:
- 教程
tags:
- vuepress
- 博客
prev: false
next: ./02PicGo+腾讯云搭建图床
---


## 基础

### 项目搭建

在正式开始之前，我们需要初始化项目

```shell
mkdir blogs
cd blogs
git init
```

由于本站是由`vuePress`进行搭建的，所以接下来就是引入`vuePress`的依赖包了

注意：由于不知道的原因，我们使用的**node版本不能太高**
，不然会报错的！刚开始的时候我使用的node版本是`18.12.1`
，也就是这个时间点node官方支持的最新的稳定版，按照官网的指南进行项目无法启动。后面切换成了比较老的版本(
16.15.0)成功运行~

```shell
yarn add vuepress -D
# 初始化package
yarn init
```

引入依赖后，我们的博客就算搭建好了，接下来就是创建对应的文件以及文件夹了

由于vuePress遵循“约定大于配置”的原则故而推荐使用的目录结构如下：

```
.
├── docs
│   ├── .vuepress
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   └── config.js (可选的)
│   ├──blogs
│   │   ├──01.md
│   │   └── 02.md
│   ├── README.md
│   └── config.md
│  
├──.gitignore
├──README.md
└── package.json
```

完成以上这个步骤后，加下来就在package.json文件中添加运行脚本了

```
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}
```

添加脚本后，我们就可以启动我们的项目了~

```shell
yarn docs:dev
```

### 项目配置

完成上述的步骤后，我们已经得到了一个模板了，接下来就让我们发挥奇思妙想构建属于自己的博客吧~

* 添加网页标题和描述

```js
module.exports = {
    title: "这里等同于html中的title标签",
    description: "JohnsonXin的个人博客",
}
```

* 添加导航栏

```
module.exports = {
    ...
  themeConfig: {
    nav:[
      {text:"首页",link:"/"},
      {
        text:"JohnsonXin 的小站",
        items:[
          {
            text:"掘金",
            link:"https://juejin.cn/user/2573324506368663"
          },
          {
            text:"GitHub",
            link:"https://github.com/CodeGetters"
          }
        ]
      }
    ]
  }
}
```

* 添加侧边栏

```
module.exports={
    ...
    themeConfig:{
        // 作者
        author:"JohnsonXin",
        // 导航栏
        nav:[...], 
        //侧边栏
        sidebar: [
            {
              title: "欢迎",
              path: "/",
              // 是否折叠
              collapsable: false,
              children: [
                { title: "博客简介", path: "/" }
            ]},
            {
              title: "基础篇",
              path: "/blogs/01",
              collapsable: true,
              children: [
                { title: "第一篇", path: "/blogs/01" },
                { title: "第二篇", path: "/blogs/02" },
              ]
            }
        ]
    }
}
```

配置好上面的配置以后，我们的博客模板基础就已经做好了！

## 博客升级

完成上面的步骤只是一个基础的博客系统，如果想要美化升级我们的博客，我们就需要通过插件来丰富博客

### 分类和标签

我们重新改变我们的整体布局，将 `sideebar`去除，加入博客配置`blogConfig`

```
 module.exports = {
  title: 'XXX的博客',
  description: 'YYY',
  themeConfig: {
    nav: [...],
    // 博客配置
    blogConfig: {
        //分类
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
  }
}
```

配置上面的内容后，我们如果重新启动项目，那么博客分类和tag分类是不会显示的，想要显示就需要在`blog`文件夹中写入相关的文章信息

### 文章信息

```
---
title: 手把手教你轻松手写防抖和节流🔥
date: 2023-1-1
categories:
  - 前端
tags:
  - JavaScript
  - 手写
sticky: 1
---
```

`title` 是标题，`date` 是日期，`categories` 是分类，`tags` 是标签，可以有多个分类和标签，`sticky` 可以让文章置顶，数字表示顺序，1 表示在最上面，2 其次

这里的代码格式一定是按照如上写法：变量后面要加冒号，冒号后面要有空格，不要加逗号

注意：如果说我们没有按照如上的配置，那么重新启动项目就会报错！

### 日期格式

想要将日期格式从2023-2-24改为2023/2/24只需改如下配置
```
odule.exports = {
  ...
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  ...
}
```

### 头像图标

想要配置logo和头像图标，只需在`themeConfig`添加如下配置

```
logo:"/avatar.jpg",
authorAvatar:"/avatar.jpg",
```

### 首页配置

想要设置首页，我们只需将`.vuepress`文件夹中的`README.md`中加入下面的代码

```
---
home: true
heroImage: "/live.jpg"
heroText: Shark Xu
heroImageStyle:
  {
    maxHeight: "288px",
    display: block,
    borderRadius: "19% 81% 23% 77% / 44% 57% 43% 56%",
    boxShadow: "0 15px 18px rgba(0,0,0,0.2)",
  } 
---
```

想要将图片设置为背景图片并设置背景图片样式

```
---
home: true
heroText: Shark Xu
bgImage: "/blue.jpg"
bgImageStyle: { height: "100%", boxShadow: "0 15px 18px rgba(0,0,0,0.2)" }
---
```

完成以上的配置后，我们的配置已经告一段落了，接下来我们就开始添加插件了~

### 插件

---
樱花掉落效果

引入依赖

```shell
yarn add vuepress-plugin-sakura -D
```

在config.js中加入plugins
```
module.exports = {
     ...
     plugins: [
        [
          "sakura",
          {
            num: 20, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
              replace: false, // false 默认图 true 换图 需要填写httpUrl地址
            },
          },
        ],
     ]
     ...
}
```

---

鼠标点击效果

引入依赖
```
yarn add vuepress-plugin-cursor-effects -D
```

配置
```
 plugins: [
    [...],
    [
      "cursor-effects",
      {
        size: 4, // size of the particle, default: 2
        shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
 ]
```


---
音乐播放器

引入依赖
```shell
yarn add @vuepress-reco/vuepress-plugin-bgm-player -D
```

配置
```js
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
]
```

这里需要注意的是，歌曲 url 链接格式需为 MP3 格式，否则无法播放。


---
百度统计

```shell
yarn add vuepress-plugin-baidu-tongji -D
```

进入百度统计获取`hm`值后，在`config.js`进行配置
```js
[
    //百度统计
    'vuepress-plugin-baidu-tongji',
    {
        hm: "hm值"
    }
]
```

---
页面切换进度条

```shell
yarn add @vuepress/plugin-nprogress -D
```

配置
```js
...
'@vuepress/plugin-nprogress'
...
```

---
代码复制

```shell
yarn add one-click-copy -D
```

配置
```js
[
  'one-click-copy', // 复制
  {
    copySelector: [
      'div[class*="language-"] pre',
      'div[class*="aside-code"] aside',
    ],
    copyMessage: '复制成功',
    duration: 1000,
    showInMobile: false,
  },
]
```

---
著作权信息

```shell
yarn add vuepress-plugin-copyright -D
```

配置
```js
[
    //著作权信息
    'copyright',
    {
        // 选中的文字将无法被复制
        authorName: 'JohnsonXin',
        // 如果长度超过  20 个字符
        minLength: 15,
    },
]
```

---
看板娘

```shell
yarn add @vuepress-reco/vuepress-plugin-kan-ban-niang -D
```

配置
```js
[
    //看板娘
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
        friendLinks: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
    }
]
```

---
评论---能登录但是无法使用(已弃用)

首先我们需要在github上创建一个新的[OAuth App](https://vssue.js.org/zh/guide/github.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-oauth-app)和存储评论的仓库

创建完成后可得到`Client ID`和`Client secret`

安装依赖
```shell
yarn add @vssue/vuepress-plugin-vssue -D

yarn add @vssue/api-github-v4 -D

```

配置
```js
[
    '@vssue/vuepress-plugin-vssue',
    {
        // 设置平台，而不是 `api`
        platform: 'github-v4',
        // 仓库的拥有者的名称
        owner: '',
        // 存储 Issue 和评论的仓库的名称
        repo: '',
        // Client ID
        clientId: 'xxx',
        // Client secrets
        clientSecret: 'xxx',
        //自动创建评论
        autoCreateIssue:true
    }
]
```

使用
```markdown
<!-- README.md -->
# Vssue Demo
<Vssue/>
```

---
评论Valine

安装
```shell
yarn add vuepress-plugin-comment -D
```

使用
```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ]
  ]
}
```

---
开启pwa

安装
```shell
yarn add @vuepress/plugin-pwa -D
```

配置
```js
//head
['link', {rel: 'manifest', href: '/manifest.json'}],
//plugin
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
```

在`public`文件夹中新建一个`manifest.json`文件--[MDN介绍](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
```json
{
  "name": "liveForever",
  "short_name": "LF",
  "display": "standalone",
  "background_color": "#fff",
  "start_url": "/index.html",
  "description": "JohnsonXin的博客",
  "theme_color": "#ff66cc",
  "icons": [
    {
      "src": "https://cdn.jsdelivr.net/gh/CodeGetters/blogs-cdn/images/00.ico",
      "sizes": "32x32",
      "type": "image/png"
    }
  ]
}
```
接着运行项目即可在在开发者工具中的 [应用] - [清单中] 显示对应信息


## 使用cdn进行对静态资源加速---不稳定

这里我们使用的是`jsdelivr`进行加速----[官网](https://www.jsdelivr.com/)

首先我们在`GitHub`中创建一个新的仓库用于存放我们的静态资源，接着将我们的静态资源上传到github，然后将资源作为一个版本发布出去

访问方式
```
// load any GitHub release, commit, or branch
// note: we recommend using npm for projects that support it
https://cdn.jsdelivr.net/gh/用户名/仓库名/文件路径
```

好了，到这里我们的教程已经结束了，如果这篇教程对你有帮助，可以考虑请我喝杯奶茶~毕竟创作不易哈哈哈

<reward/>
