<template>
  <div class="personal-info-wrapper">
    <!--头像-->
    <a href="#" >
      <img
          class="personal-img"
          v-if="$themeConfig.authorAvatar"
          :src="$withBase($themeConfig.authorAvatar)"
          alt="author-avatar"
      >
    </a>
    <h3
        class="name"
        v-if="$themeConfig.author || $site.title"
    >
      {{ $themeConfig.author || $site.title }}
    </h3>

    <!--站点信息-->
    <!--<div class="num">-->
    <!--  <div>-->
    <!--    <h3>{{ $recoPosts.length }}</h3>-->
    <!--    <h6>{{ homeBlogCfg.article }}</h6>-->
    <!--  </div>-->
    <!--  <div>-->
    <!--    <h3>{{ $tags.list.length }}</h3>-->
    <!--    <h6>{{ homeBlogCfg.tag }}</h6>-->
    <!--  </div>-->
    <!--</div>-->

    <!--链接-->
    <ul class="social-links">
      <li
          class="social-item"
          v-for="(item, index) in socialLinks"
          :key="index"
      >
        <reco-icon :icon="item.icon" :link="item.link" :style="{ color: item.color }"/>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
import {computed, defineComponent} from '@vue/composition-api'
import {RecoIcon} from '@vuepress-reco/core/lib/components'
import {getOneColor} from '@theme/helpers/other'

export default defineComponent({
  components: {RecoIcon},
  setup(props, ctx) {
    const {root: _this} = ctx

    const homeBlogCfg = computed(() => _this.$recoLocales.homeBlog)
    const socialLinks = computed(() => (_this.$themeConfig.blogConfig && _this.$themeConfig.blogConfig.socialLinks || []).map(item => {
      if (!item.color) item.color = getOneColor()
      return item
    }))

    return {homeBlogCfg, socialLinks}
  }
})
</script>

<style lang="stylus" scoped>
.personal-info-wrapper {

  .personal-img {
    display block
    margin 2rem auto 1rem
    width 6rem
    height 6rem
    border-radius 50%

    &:hover {
      transform rotate(666turn)
      transition-duration 59s
      transition-timing-function cubic-bezier(.34, 0, .84, 1)
    }
  }

  .name {
    font-size 1rem
    text-align center
    color var(--text-color)
  }

  //站点信息

  .num {
    display flex
    margin 0 auto 1rem
    width 80%

    > div {
      text-align center
      flex 0 0 50%

      &:first-child {
        border-right 1px solid #333
      }

      h3 {
        line-height auto
        margin 0 0 .6rem
        color var(--text-color)
      }

      h6 {
        line-height auto
        color var(--text-color)
        margin 0
      }
    }
  }

  .social-links {
    box-sizing border-box
    display flex
    flex-wrap wrap
    padding 10px

    .social-item {
      width 39px
      height 36px
      line-height 36px
      text-align center
      list-style none
      transition transform .3s

      &:hover {
        transform scale(1.08)
      }

      i {
        cursor pointer
        font-size 22px
      }
    }
  }
}
</style>
