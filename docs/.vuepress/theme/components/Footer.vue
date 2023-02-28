<template>
  <!--页尾-->
  <div class="footer-wrapper">
    <!--皮肤主题-->
    <!--<span>-->
    <!--  <reco-icon icon="reco-theme" />-->
    <!--  <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{`vuepress-theme-reco@${version}`}}</a>-->
    <!--</span>-->

    <!--备案信息-->
    <span v-if="$themeConfig.record">
      <reco-icon icon="reco-beian"/>
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
    <!--版权信息-->
    <span>
      <reco-icon icon="reco-copyright"/>
      <a>
        <span v-if="$themeConfig.author || $site.title">MIT Licensed | Copyright © 2023-present {{
            $themeConfig.author || $site.title
          }}</span>
        &nbsp;&nbsp;
        <span v-if="$themeConfig.startYear && $themeConfig.startYear !== (new Date().getFullYear())">{{
            $themeConfig.startYear
          }} - </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>
    <!--浏览量-->
    <span v-show="showAccessNumber">
      <reco-icon icon="reco-eye"/>
      <AccessNumber idVal="/"/>
    </span>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :isShowComments="false"/>
    <br>
    <!--运行计时-->
    <span id="runTime">{{ timer }}</span>
  </div>
</template>

<script>
import {computed, defineComponent, onBeforeUnmount, onMounted, ref} from '@vue/composition-api'
import {RecoIcon} from '@vuepress-reco/core/lib/components'
import {version} from '../package.json'

export default defineComponent({
  components: {RecoIcon},
  setup(props, ctx) {
    //浏览量
    const showAccessNumber = computed(() => {
      const {
        $themeConfig: {valineConfig},
        $themeLocaleConfig: {valineConfig: valineLocalConfig}
      } = ctx.root

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor !== false
    })

    //运行时长
    let timer = ref('')
    let timers = null
    const getShouTIme = () => {
      let start = new Date("2023/01/24 00:00:00");
      let now = new Date();
      let duration = now.getTime() - start.getTime();
      // 一天的毫秒数
      let msPerDay = 24 * 60 * 60 * 1000;
      // 天
      let _day = duration / msPerDay;
      let day = Math.floor(_day);
      // 小时
      let _hour = (_day - day) * 24;
      let hour = Math.floor(_hour);
      // 分钟
      let _minute = (_hour - hour) * 60;
      let minute = Math.floor(_minute);
      // 秒
      let _second = (_minute - minute) * 60;
      let second = Math.floor(_second);
      timer.value = `本站已运行时长：${day}天${hour}时${minute}分${second}秒`
    }

    onMounted(() => {
      getShouTIme()
      timers = setInterval(() => {
        getShouTIme()
      }, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(timers)
    })
    return {version, showAccessNumber, timer}
  }
})
</script>

<style lang="stylus" scoped>
.footer-wrapper {
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: lighten($textColor, 25%);

  a {
    font-size 14px
  }

  > span {
    margin-left 1rem

    > i {
      margin-right .5rem
    }
  }

  .cyber-security {
    img {
      margin-right .5rem
      width 20px
      height 20px
      vertical-align middle
    }

    a {
      vertical-align middle
    }
  }
}

@media (max-width: $MQMobile) {
  .footer {
    text-align: left !important;

    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
