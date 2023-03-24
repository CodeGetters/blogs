<template>
  <div>
    <a href="https://github.com/CodeGetters" target="_blank">
      <div class="snk-pic">
        <div class="light-snk">
          <img alt="snake" src="https://txy.reday.asia/images/202302181234190.svg">
        </div>
        <div class="dark-snk">
          <img alt="snake" src="https://txy.reday.asia/images/202302181234636.svg">
        </div>
      </div>
    </a>
    <div class="container">
      <AutomaticTypewriter class="autoType" :display-con="textCon"/>
      <reward/>
    </div>
  </div>
</template>

<script>
import reward from "./reward.vue";

import AutomaticTypewriter from './AutomaticTypewriter.vue'

export default {
  name: "about",
  components: {AutomaticTypewriter},
  setup() {
    const textCon = '欢迎你浏览我的博客，这里主要会记录自己的成长记录，你的喜欢是我保持继续前行的动力。'
    return {reward, textCon}
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.autoType {
  width: 400px;
  background-color: #ccc;
  margin-bottom: 20px;
}

.light .dark-snk {
  display: none;
}

.dark .light-snk {
  display: none;
}

.dark .autoType {
  background-color: #000;
}
</style>
