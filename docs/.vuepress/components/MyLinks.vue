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

<script setup>
import FriendLink from "./FriendLink.vue";

const friendLinks = [
  {
    title: 'mumu’s Blog',
    desc: ' 一心一明月，一树一年华',
    avatar: 'https://www.pikamumu.top/logo.png',
    link: 'https://www.pikamumu.top',
  },
  {
    title: 'ssw\'s Blog',
    desc: '将进酒',
    avatar: 'http://ssw.fit/free/vehicle.png',
    link: 'http://ssw.fit',
  },
]
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
