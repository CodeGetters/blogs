---
title: PicGo + 腾讯云搭建图床
date: 2023-2-17
categories:
- 教程
- 工具
tags:
- 博客
prev: ./01使用vuepress打造属于自己的博客
next: ./03使用阿里云服务器+宝塔快速部署vuepress
---
[[toc]]

## 前言

不管在搭建博客或者说在写博客的时候，我们都希望有图片展示在我们的博客当中，这样不仅清晰明了，更能让读者明白我们表达的意思。
但是如果我们在每次需要图片资源的时候去网上寻找，并将找到的图片的链接贴在我们的博客当中就会产生一下几个问题：

* 作者设置了[防盗链](https://www.jianshu.com/p/0a1338db6cab)
* 作者换了图片资源链接
* 将图片放在我们的项目/博客中就会导致包体积过大，加载速度过慢

以上的问题都能导致贴在我们的图片失效，所以就有了**图床**解决以上的痛点

## 图床

有伙伴就问了：图床是什么？是用来做什么的？

简单来说，图床就是专门用来存放图片，同时允许我们把图片对外连接的网上空间，不少图床都是免费的。

以上就是来自百度百科关于图床的的解释。

总而言之，图床就是存图片的，类似于网盘，不过可以生成专门的链接用于访问

图床的制作有多种方法，不过我们既然都是学生，在没有能力支撑起费用之前还是乖乖选择白嫖吧，毕竟谁不喜欢白嫖~

下面列举几个白嫖方案：
* GitHub + jsdelivr 加速
* [七牛云](https://www.qiniu.com/)
* [腾讯云](https://cloud.tencent.com/product/cdn)

以上就是我了解并使用过的几个白嫖方案，我依次来说明一下各个白嫖方案吧
* Github：仓库容量最大不能超过 1G 且单个文件不能超过 100M，相信这个对于大多数伙伴来说已经够用了
  * 但是由于GitHub服务器是在外网，很多时候需要挂梯子才能访问所以我们的图片很多使用不一定能够访问成功。
  * 这就衍生出了使用`jsdelivr`加速访问，但是近期被ban过，所以加速效果不尽人意...
  
* 七牛云：很多博主都很推荐，原因主要是它家注册就有**对象存储**10GB/月永久使用，**CDN**10GB流量/月，在使用阿里云搭建之前，我一直都是用的它家
  * 如果使用到`https`请求服务的话，它家并没有免费额度，只有`http`有免费额度
  
  * 有伙伴有会问到：既然有免费额度的话就为什么不用`http`，其实大家也是可以用这个的，我放弃使用这个的原因主要是因为`http`服务不安全(就是网站左边显示的警告)
  
    ![](https://txy.reday.asia/images/202302171346518.png)
  
* 腾讯云：新人可以免费使用100GB不过只有6个月的有效期，但属实够用，后面续费的话且续费也只要20！并且``https`每个月也有免费请求次数~

  * 它家的对象存储使用也一开始送50GB存储容量/6个月有效期


综上，我果断选择腾讯云---主要是白嫖~哈哈哈

## 准备

做一个自己的图床需要用到：
* picGo---图片上传器
* 域名---用于访问图片
* cdn---与对象存储相关联
* 对象存储---存储图片资源的对象



## 开始搭建

准备好上面的内容我们就开始搭建我们的图床吧~



### 腾讯云CDN配置

腾讯云这边主要是对象存储配置和CDN配置



#### 对象存储

我们腾讯云进入控制台面板，选择对象存储，进入对象存储面板，点击存储桶列表，点击创建存储桶

配置好你的个人需求后，进入下一步---配置高级可选配置，如果你没有什么想要配置的话就直接下一步就好了

![](https://txy.reday.asia/images/202302171416309.png)



#### CDN

进入CDN面板后点击域名管理，而后添加域名然后进行配置

域名配置就按照你自己的需求进行配置，前提是得要自己个人域名的一个二级域名申请，这样到时候可以用这个域名访相应的图片

源站地址就选择刚才你创建的地址，然后点击确认添加后等待几分钟等它自己配置好就算完成了

![749b0e532b7c9a3445bbb18c7dcfd0d](https://txy.reday.asia/images/202302171427237.png)





### 搭建PicGo

接下来就是搭建图床的最后一步了。在[官网](https://molunerfinn.com/PicGo/)下载该软件，下载后打开界面如下

打开设置建议开启时间戳命名，主要避免重命名

![](https://txy.reday.asia/images/202302171401501.png)



打开图床设置--->找到腾讯云COS--->打开腾讯面板--->进入访问密钥

* Bucket就是对象存储的名称
*  SecretId、SecretKey  和 AppID 都能在访问密钥面板找到
* 存储区域在存储桶概览中的基本信息可以找到：在所属区域---例如：ap-shanghai
* 自定义域名就是CDN域名

![](https://txy.reday.asia/images/202302171409800.jpg)



完成以上内容，我们的搭建图床就算完成了



## bug建议

如果你发现你的 PicGo 上传的照片无法查看可以试着重启一下，如果重启无用就重新下载配置一下

好了，到这里我们的教程已经结束了，如果这篇教程对你有帮助，可以考虑请我喝杯奶茶~毕竟创作不易哈哈哈

<reward/>
