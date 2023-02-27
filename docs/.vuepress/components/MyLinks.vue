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
        title: 'mumu’s Blog',
        desc: ' 一心一明月，一树一年华',
        avatar: 'https://www.pikamumu.top/logo.png',
        link: 'https://www.pikamumu.top',
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
