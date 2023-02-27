/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { addLinkToHead, addScriptToHead } from '@theme/helpers/utils'
import { registerCodeThemeCss, interceptRouterError } from '@theme/helpers/other'
import VueCompositionAPI from '@vue/composition-api'

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  Vue.use(VueCompositionAPI)
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  if (!isServer) {
    addLinkToHead('//at.alicdn.com/t/font_1030519_2ciwdtb4x65.css')
    addScriptToHead('//kit.fontawesome.com/51b01de608.js')
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }

  //Vue.mixin({
  //  mounted() {
  //    // 不加 setTimeout 会有报错，但不影响效果
  //    setTimeout(() => {
  //      try {
  //        docsearch({
  //          appId: "EWNGBGHKAL",
  //          apiKey: "e6f4888e459e829f835a89117159e5f0",
  //          indexName: "reday",
  //          container: '.search-box',
  //          // Set debug to true if you want to inspect the modal
  //          debug: false
  //        });
  //      } catch(e) {
  //        console.log(e);
  //      }
  //    }, 100)
  //  },
  //});

  interceptRouterError(router)
}
