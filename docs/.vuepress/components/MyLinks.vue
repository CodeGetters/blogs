<template>
  <div class="container">
    <FriendLink v-for="(item, index) in friendLinks"
                :key="index"
                :title="item.title"
                :desc="item.desc"
                :link="item.link"
                :avatar="item.avatar"
    />
  </div>
</template>

<script>
import FriendLink from "./FriendLink.vue";

export default {
  setup() {
    const friendLinks = [
      {
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        avatar: 'https://v1.vuepress.vuejs.org/hero.png',
        link: 'https://v1.vuepress.vuejs.org/zh/',
      },
      {
        title: 'VuePress',
        desc: '一款简洁而优雅的 vuepress 博客&文档 主题',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com/',
      },
      {
        title: 'mumu’s Blog',
        desc: ' 一心一明月，一树一年华',
        avatar: 'https://www.pikamumu.top/logo.png',
        link: 'https://www.pikamumu.top',
      },
      {
        title: '老陈笔记',
        desc: '一点一滴都是进步',
        avatar: 'http://www.weblearn.fit/favicon.ico',
        link: 'http://www.weblearn.fit/'
      },
      {
        title: "cosの博客",
        desc: "WA的一声就哭了",
        avatar: "https://ysx.cosine.ren/img/avatar.jpg",
        link: "https://ysx.cosine.ren/",
      },
      {
        name:"Revincx",
        link: "https://blog.revincx.icu/",
        avatar: "https://cdn.jsdelivr.net/gh/Revincx/blog-assets@master/images/avatar.jpg",
        desc: "可爱就是正义~"
      }
    ]
    return {friendLinks, FriendLink}
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  height: auto;
}
</style>
