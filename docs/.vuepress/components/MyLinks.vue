<template>
  <div class="container">
    <span class="explain">小伙伴们</span>
    <FriendLink v-for="(item, index) in partner"
                :key="index"
                :title="item.title"
                :desc="item.desc"
                :link="item.link"
                :avatar="item.avatar"
    />

    <span class="explain">特别感谢</span>
    <FriendLink v-for="(item, index) in theme"
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

import {theme,partner} from "../../friendInfo/friendLinks";

export default {
  setup() {
    return {theme,partner, FriendLink}
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
.explain{
  width: 100%;
  font-size: 1.4rem;
  display: block;
  margin-top: -1.5rem;
  padding-top: 3.6rem;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.25;
}
</style>
