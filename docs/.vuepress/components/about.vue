<template>
  <div>
    还在筹备中...
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
    <br>
    <reward/>
  </div>
</template>

<script>
import Reward from "./reward.vue";

export default {
  name:"about",
  setup(){
    return {Reward}
  }
}
</script>

<style scoped>
.light .dark-snk{
  display: none;
}

.dark .light-snk{
  display: none;
}
</style>
