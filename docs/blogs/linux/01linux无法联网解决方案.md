---
title: linux无法联网解决方案
date: 2023-03-04
categories:
- 问题记录
- 后端
tags:
- linux
---

## 前言

今天准备打开宝塔准备更新一下内容，由于我设置了计划任务就习惯性的让计划任务运行。然后在拉取克隆远程仓库的时候出错了，我也没想太多，毕竟这样的事情也时常发生(昨天才改成了ssh克隆，没有注意~)。
接下来就是让我难受的了，打开 XShell 工具进行输入克隆指令后运行出错，错误是这样的：

```shell
fatal: unable to access 'https://github.com/CodeGetters/blogs.git/': Could not resolve host: github.com; Unknown error
```

## 解决过程

发生了上面的错误，我看了一眼前面的无法访问我们的仓库，emmmm，怎么那么熟悉，我就以为是网络的原因(github网络问题懂得都懂)。然后我想起来我配置了 ssh，然后使用 ssh 克隆还是不行。

我只好拿出我的终极解决方案了---百度(毕竟我对 linux 使用比较生疏)

在百度后，我看见了有人说是因为 ssh 密钥的原因，需要重新配置。我心想我也没干啥，密钥文件我也没有动它，咋可能是它的原因，直接否定。然后看到了这篇[文章](https://blog.csdn.net/weixin_41010198/article/details/89553879)，
我就照着文中的方法：解析出域名对应的IP地址(ping)，接着发生了如下错误：

```shell
# ping github.com

ping: github.com: Name or service not known
```

啊啊啊啊~到这里确实很难受了，都 ping 不通怎么知道 github 主机 ip 啊。不过既然出错了那就得解决啊，然后继续百度，直到看到这一篇[文章](https://blog.csdn.net/lz20120808/article/details/103488186)。
然后顺着往下看了看。`/etc/sysconfig/network-scripts/ifcfg-ens33`这个文件路径怎么这么熟悉，呃，好像是昨天我使用桥接让手机和云服务器处在同一局域网内修改的文件路径吧。
马上打开该文件，还真的是，我还特意留了注释。接着重启一下网络

```shell
service network restart
```

主机成功 ping 通了，既然通了那说明我就能克隆了，不出意外成功了！！！

## 总结

这次的错误主要是由于自己修改了配置文件，没有及时改回来导致的。下次不改文件了(怎么可能不改，不改文件怎么知道还有这些错误哈哈哈)，再出现这样的问题先 ping 一下，检查是不是网络的问题再 bing 一下~~~

<reward/>
