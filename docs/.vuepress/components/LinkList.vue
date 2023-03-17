<template>
  <div class="container">
    <div  class="container">
      <span class="link-title">推荐博客</span>
      <span class="link-desc">内容输出较多的博主们</span>
      <FriendLink v-for="(item, key) in recommend"
                  :key="key"
                  :title="item.title"
                  :desc="item.desc"
                  :link="item.link"
                  :avatar="item.avatar"
      />
    </div>

    <div class="container">
      <span class="link-title">左邻右舍</span>
      <FriendLink v-for="(item, index) in partner"
                  :key="index"
                  :title="item.title"
                  :desc="item.desc"
                  :link="item.link"
                  :avatar="item.avatar"
      />
    </div>

    <div  class="container">
      <span class="link-title">单向链</span>
      <span class="link-desc">一些自己发现的优质博主，很喜欢他们的内容，或是生活分享、或是技术分享、或是心得分享，默默的关注着他们~</span>
      <FriendLink v-for="(item, index) in prePartner"
                  :key="index"
                  :title="item.title"
                  :desc="item.desc"
                  :link="item.link"
                  :avatar="item.avatar"
      />
    </div>

    <div  class="container">
      <span class="link-title">特别感谢</span>
      <span class="link-desc">有他们的存在，才会有了本站~</span>
      <FriendLink v-for="(item, key) in theme"
                  :key="key"
                  :title="item.title"
                  :desc="item.desc"
                  :link="item.link"
                  :avatar="item.avatar"
      />
    </div>
  </div>

</template>

<script>
import FriendLink from "./FriendLink.vue";

import {recommend,partner, prePartner, theme} from "../../hooks/friendLinks.js";

export default {
  setup() {
    return {prePartner, theme, partner, FriendLink,recommend}
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

.link-title {
  width: 100%;
  font-size: 1.4rem;
  display: block;
  margin-top: -1.5rem;
  padding-top: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.25;
}

.link-desc{
  width: 100%;
  height: 20px;
}
</style>
