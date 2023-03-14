---
title: Vue小知识
date: 2023-03-12
categories:
- 前端
tags:
- vue
---

## 别名的配置

在 jsoncinfig.json | vue.config.js | vite.config.js 中配置

```js
export default defineConfig({
    plugins: [vue()],
    resolve: {
        //配置别名
        alias: {
            "@": fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
```

## Vue的渲染过程

模板template--->compile--->createVNode()--->VNode--->虚拟DOM--->真实的DOM

在项目中的使用的 .vue 文件都是由 vue-loader 完成 template->createVNode 的过程

```js
//runtime,vue-loader 完成 template 编译过程
import {createApp} from 'vue'

const App = createApp(App)

App.mount('#app')
```

如果是在 js 文件中手动创建模板比如 app.js 中的创建 App 的过程就是由 vue/dist/vue.esm-bundler 完成的

```js
//vue.esm-bunlder：runtime+compile
import {createApp} from 'vue/dist/vue.esm-bundler'

const App = {
    template: `<h2>Hello World</h2>`,
    data() {
        return {}
    }
}
App.mount('#app')
```

## 推荐插件

在 .vscode/extensions.json 中的 recommendations 可以显示推荐下载的插件

```json
{
  "recommendations": [
    "..."
  ]
}
```

<reward/>
