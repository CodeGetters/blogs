<template>
    <div>
        <AutomaticTypewriter class="autoType" :display-con="textCon" text-theme="#0567f1"/>

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
        <reward/>
    </div>
</template>

<script>
import reward from "./reward.vue";

import AutomaticTypewriter from './AutomaticTypewriter.vue'

export default {
    name: "about",
    components: {AutomaticTypewriter},
    setup() {
        const textCon = '生活不止有诗一般的远方，还有当下的苟且---既要保持幻想，也要活在当下'
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
    width: 100%;
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
