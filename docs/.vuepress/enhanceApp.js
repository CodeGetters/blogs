// algolia 搜索
export default ({ router, Vue, isServer }) => {
    router.beforeEach((to, from, next) => {
        if (typeof _hmt !== "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
            }
        }

        next();
    });

    Vue.mixin({
        mounted() {
            // 不加 setTimeout 会有报错，但不影响效果
            setTimeout(() => {
                try {
                    docsearch({
                        appId: "EWNGBGHKAL",
                        apiKey: "e6f4888e459e829f835a89117159e5f0",
                        indexName: "reday",
                        container: '.search-box',
                        // Set debug to true if you want to inspect the modal
                        debug: false
                    });
                } catch(e) {
                    console.log(e);
                }
            }, 100)
        },
    });
};
