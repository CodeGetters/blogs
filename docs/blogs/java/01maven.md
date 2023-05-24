---
title: Maven 下载安装
date: 2023-05-24
categories:
- 后端
tags:
- Java
publish: false
---

## 下载

[官网](https://maven.apache.org/download.cgi)

点击此处下载压缩包

![Snipaste_2023-04-21_11-42-46](http://cdn.reday.asia/images/202304211143826.png)

下载好压缩包后解压到没有中文没有空格的目录中

比如：E:\maven\maven_3.9.1下面

![Snipaste_2023-04-21_11-46-11](http://cdn.reday.asia/images/202304211146573.png)

1. bin:存放了 maven 的命令
2. boot:存放了一些 maven 本身的引导程序，如类加载器等
3. conf:存放了 maven 的一些配置文件，如 setting.xml 文件
4. lib:存放了 maven 本身运行所需的一些 jar 包

## 配置

完成以上步骤后我们开始进行配置


### 环境变量

配置 MAVEN_HOME，变量值就是上面的安装路径

![Snipaste_2023-04-21_11-48-36](http://cdn.reday.asia/images/202304211149251.png)



进入 PATH，新建一个路径。将MAVEN_HOME添加到系统变量中

![Snipaste_2023-04-21_11-52-00](http://cdn.reday.asia/images/202304211152490.png)



### 测试

我们打开终端，输入 mvn -v 命令检查是否安装成功

![Snipaste_2023-04-21_11-53-53](http://cdn.reday.asia/images/202304211154150.png)

从上图中可以看到我们的 maven 版本是 3.9.1 以及 jdk17 安装成功！

### 仓库

Maven会自动为我们添加相应的jar包，而这个jar包会先在本地仓库中查找，如果本地仓库中不到，则会去中央仓库（非本地）中进行下载。

#### 本地仓库

本地仓库初始化：在终端中输入命令 mvn 

![Snipaste_2023-04-21_12-03-46](http://cdn.reday.asia/images/202304211203397.png)

初始化后 maven 会默认在 C 盘/用户/.m2 中有一个 repository 文件夹，这里不推荐将本地仓库存放在 C盘 所以就直接删掉，保存.m2文件夹即可。

我们在其他盘中创建一个 repository 文件夹用于当做 maven 的本地仓库。

然后进入安装目录，找到 conf 文件夹中的 setting.xml 配置文件，用编辑器(vscode)打开在localRepository的注释标签下面添加

```xml
<loaclRepository>新的 repository 文件夹路径</localRepository>
```

#### 中央仓库

将一下代码复制粘贴到 setting.xml 文件夹中的mirrors标签中即可

```xml
<mirror>
    <id>nexus-aliyun</id>
    <mirrorOf>central</mirrorOf>
    <name>Nexus aliyun</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public</url> 
</mirror>
```

最后，将setting.xml文件复制粘贴到 .m2 文件夹中

<reward/>
