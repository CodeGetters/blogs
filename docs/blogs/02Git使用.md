---
title: Git使用
date: 2022-12-27
categories:
- git
tags:
- git
- 多人协作
sticky: 1
---

[[toc]]
## 1.显示提交日志信息
```shell
#显示完整提交信息
git log

#显示简略提交信息
git log --oneline
```

## 2.回退到上一次的commit
```shell
git reset --hard HEAD
````

## 3.git连接github
用ssh生成公钥
```shell
ssh-keygen -t rsa -C "2775145275@qq.com"
```

回车之后会出现如下所示的输出，直接按回车即可：

```shell
Generating public/private rsa key pair.
Enter file in which to save the key
(/Users/your_user_directory/.ssh/id_rsa): (按回车键)
Enter passphrase (empty for no passphrase): (按回车键)
Enter same passphrase again: (按回车键)
```
密钥文件就生成了，默认在用户目录下，如：C:\User\xxx\.ssh\ 这个文件夹中。其中的xxx是你的windows用户名。

将公钥添加到github中
在C:\user\xxx\.ssh\文件夹中找到id_rsa.pub这个文件，用文本编辑器(如记事本)打开，复制里面的所有内容
登陆github账号，点击头像旁的小三角展开，点击settings-SSH and GPG keys-New SSH key，在Title中取一个名字（任意），key中粘贴你刚刚复制的内容。然后点击Add SSH key即可


测试是否关联成功
```shell
ssh -T git@github.com
```
出现以下结果即为成功：
```shell
Hi CodeGetters! You've successfully authenticated, but GitHub does not provide shell access.
```

## 4.上传代码到远程仓库
1.第一次
```shell
git push -u origin master
```

2.不是第一次
```shell
git push origin master
```

## 5.查看连接的远程仓库
```shell
git remote -v
```

## 6.分支
1、 查看本地分支情况
```shell
git branch                   
````

2、新建一个分支test
```shell
git branch test         
```

3、切换到新建的分支test
```shell
git checkout test         
```

4、 将新建分支test推送到GitHub上
```shell
git push origin test
```

5、创建新分支 test 并切换到新分支 test
```shell
git checkout -b test 
```

5.查看远程分支
```shell
git branch -r
```

6.查看所有分支情况
```shell
git branch -a
```

## 6.连接远程仓库
```shell
git add origin 仓库地址
```

## 7.查看分支状态
```shell
git status
```

## 8.将服务器上的最新代码拉取到本地

```shell
git pull
```

## 查看/修改提交用户名、邮箱
1.查看 用户名，邮箱
```shell
git config user.name
git config user.email
```

2.修改用户名、邮箱
```shell
git config --global user.name "username"
git config --global user.email "email"
```

## 9.拉取最新代码覆盖本地
```shell
# 重置索引和工作目录
git reset --hard
# 更新代码
git pull
```

## 10.更改远程仓库地址
```shell
git remote set-url origin <url>
````

## 11.查看本地分支对应的远程分支
```shell
git branch -vv
```

## 12.设置本地分支对应的远程分支
```shell
git branch --set-upstream-to=origin/远端分支名 本地分支名
```

## 13.追加提交
1.还没有`push`到远程
```shell
# 提交修改的文件
git add .

# 修改上一次的提交
git commit --amend
```

2.已经`push`到远程了
```shell
# 提交修改的文件
git add .

# 修改上一次的提交
# 修改提交信息后保存
git commit --amend

# 推送(本地分支:远程分支)
git push origin master:master
```

## 14.回滚到上次提交
```shell
# 回到上个commit
git reset --hard HEAD~1
# 强制推送
git push --force
```

## 15.Github进行fork后如何与原仓库同步
1.进入本地仓库的目录
2.执行命令 `git remote -v`查看远程仓库的路径
3.设置上游代码库(upstream)
```shell
git remote add upstream 原仓库地址
```
4.检查是否设置成功
5.检查本地是否有未提交的修改，如果有，则把本地的有效修改，先从本地仓库推送到`github`仓库。最后再执行一次`git status`检查本地已无未提交的修改
```shell
git add -A
#或
git add filename 

git commit -m "your note" 
git push origin master git status
```
注：这一步作为新手，建议严格执行，是为了避免大量无效修改或文本冲突带来的更复杂局面
6.抓取原仓库的更新
```shell
git fetch upstream
```
7.切换到master分支

8.合并远程的`master`分支
```shell
git merge upstream/master
```

9.解决冲突
使用`git status`检查是否有冲突，如果有就需要解决冲突，如果没有则进行下一步
```shell
#保留远程仓库的文件
git checkout --theirs 文件名
# 保留自己的代码文件
git checkout --ours 文件名
# 保存在本地仓库中
git add -A
```
9.推送修改
```shell
git add .
git commit -m 'info'
git push
```

##16.退出`git log`
英文状态下按q ,即可退出

## 怎么PR
[如何在github上提交PR](https://cloud.tencent.com/developer/article/1999727)
