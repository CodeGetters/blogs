---
title: Vue中的渲染过程
date: 2023-03-12
categories:
- 前端
tags:
- vue
publish: false
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

## 基础知识学习

## 组件学习

### 组建间的通 信

在开发过程中，经常遇到需要组件之间相互进行通信：

比如App可能使用了多个Header，每个地方的Header展示的内容不同，那么就需要使用者传递给Header进行展示

又比如在 main 中一次性请求了 Banner 数据和 ProductList 数据，那么就需要传递给它们来进行展示

也可能是自组件中发生了事件，需要由父组件来完成某些操作，那就需要子组件向父组件传递事件

#### 组件的嵌套关系

![](https://txy.reday.asia/images/202303121546219.png)

如果将一个应用程序将所有的逻辑都放在一个组件中，那么这个组件就会变成非常的臃肿和难以维护

所以组件话的核心思想就是对组件进行拆分，拆分成一个个小的组件，再将这些组件组合嵌套在一起，最终形成我们的应用程序

#### 组件通信

##### 通信方式

父组件传递给子组件---通过 props
子组件传递给父组件---通过 $emit 触发事件

props：接收父组件传递过来的属性

* 数组写法(在实际开发中并不常见---不能对数据类型进行验证)：

```js
export default {
    name: "ShowInfo",
    props: ["name", "age", 'height']
}
```

* 对象写法

type：类型
required：必填
default：默认值

```js
export default {
    name: "ShowInfo",
    //对象写法
    props: {
        name: {
            type: String,
            required: true,
        },
        //注：如果 type 是一个对象或者数组，那么必须写成一个函数！！！
        propsA: {
            type: Object,
            //default:()=>({name:'zhangsan'})
            default() {
                return {message: 'hello'}
            }
        },
        propsG: {
            //写组件库或者框架时需要
            validator(value) {
                //这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].includes(value)
            }
        }
    }
}
```

细节一：
type的类型有：String、Number、Boolean、Array、Object、Date、Function、Symbol

细节二：对象类型的其他写法

```js
//props:{
//    messagteInfo:String,
//        //基础的类型检查('null'和‘undefined’会通过任何类型验证)
//        paopA
//:
//    Number,
//        paopB
//:
//    [String, Number],
//        propC
//:
//    {
//        type:String,
//            required
//    :
//        true
//    }
//,
//    propE:{
//        type:Object,
//    default
//        ()
//        {
//            return {message: 'hello'}
//        }
//    }
//,
//    //自定义验证函数
//    propF:{
//        validator(value)
//        {
//            //这个值必须匹配下列字符串中的一个
//            return ['success', 'warning', 'danger'].includes(value)
//        }
//    }
//,
//    propG:{
//        type:Function,
//    default
//        ()
//        {
//            return "Default function"
//        }
//    }
//}
```

细节三：Props的大小写命名

HTML中的 attribute 名是大小写不敏感的，所以浏览器会吧所有大写字符解释为小写字符。这意味着当使用DOM中的模板时，camelCase的
prop 名需要使用其等价的 kebab-case 命名

#### 非 props 的 attribute

当我们传递给一个组件某个属性，但是该属性并没有定义对应的props时，就称之为非 Prop 的 attribute

常见的包括class、style、id属性等

如果当前的属性是一个非 Prop 的 attribute，那么该属性会默认添加到自组建的根元素上。如果要禁用，就在该组件的添加
```js
inheritAttrs:false
```

如果不希望组件的根元素继承 attribute，可以在组件中设置 inheritAttrs:false

禁用 attribute 继承的常见情况是需要将attribute 应用与根元素之外的其他元素
可以通过 $attrs 来访问所有的 非 props 的 attribute
```vue
<!--这样就将父组件的数据放到了姓名这里了-->
<h2 :class="$attrs">姓名：{{name}}</h2>  
```
多个根节点的attribute：

多个根节点的attribute如果没有显示的绑定，那么会报警告，必须手动的指定要绑定到哪一个属性上


#### 子组件传递父组件

* 子组件需要传递内容到父组件的情况

当子组件有一些事件发生的时候，比如在组件中发生了点击，父组件需要切换内容

子组件有一些内容想要传递给父组件的时候

* 如何完成
    * 首先，需要在子组件中定义好在某些情况下触发的事件名称
    * 其次，在父组件中以 v-on 的方式传入要监听的事件名称，并且绑定到对应的方法中
    * 最后，在子组件中发生某个事件的时候，根据事件名称触发对应的事件

* 自定义事件的事件的流程
    * 封装一个CounterOperation组件
    * 内部其实是监听两个按钮的点击，点击之后通过 this.$emit 的方式发出去事件
#### 组件通信案例练习
