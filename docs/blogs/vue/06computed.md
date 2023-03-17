---
title: computed && Provide
date: 2023-03-16
categories:
- 前端
tags:
- vue
prev: ./05响应式数据
---

## computed

当我们的某些属性依赖其他状态时，可以使用计算属性 computed 来处理

方式一：接收一个 getter 函数，并为 getter 函数返回值，返回一个不变的 ref 对象
方式二：接收一个具有 get 和 set 对象，返回一个可变的(可读写) ref 对象

举例：
```vue
<template>
  <div>
    <h2>{{ names.firstname + '' + names.lastname }}</h2>
    <h2>{{ fullName }}</h2>

    <h2>{{ scoreLevel }}</h2>
    <!--如果在这里写逻辑，代码会比较长-->
    <button @click="setFullname">修改 fullname</button>
  </div>
</template>

<script>
import {computed, reactive, ref} from "vue";

export default {
  setup() {
    const names = reactive({
      firstname: "kebe",
      lastname: 'bryant'
    })
    const score = ref(89)

    //const fullName = computed(() => {
    //  return names.firstname + '' + names.lastname
    //})

    const fullName = computed({
      set: function (newValue) {
        //console.log('newValue:'+newValue)
        const temNames = newValue.split("-")

        names.firstname = temNames[0]
        names.lastname = temNames[1]
      },
      get: function () {
        return names.firstname + '-' + names.lastname
      }
    })
    function setFullname() {
      //console.log('fullName:' + fullName.value)
      fullName.value = "josbj-jsdhnfjk"
    }
    const scoreLevel = computed(() => {
      return score.value >= 60 ? "及格" : "不及格"
    })
    
    return {names, fullName, scoreLevel, setFullname}
  }
}
</script>
```

## Provide && Inject

在开发中，我们经常需要给子代元素传递数据。当然，这不仅仅只是父传子，也有隔代传数据的。
这里就可以使用 Provide 和 Inject 来实现我们想要的效果。

Provide：提供数据给子代元素进行使用，通过 provide 方法来定义每个 property

provide.name：提供属性的名称
provide.value：提供的属性值

在后代组件可以通过 Inject 来注入需要的属性和对应的值：

传入数据的 name 以及默认值

当然，为了增加 provide 和 inject 之间的响应性，我们可以下载 provide 值时使用 ref 和 reactive，
使得后代元素可以使用响应式数据。但是需要注意的是，如果使用 inject 的 options api 注入，需要手动解包

举例：

```vue
<!--父元素-->
<template>
  <showInfo/>
  <button @click="changHeight">加一</button>
</template>

<script>
import {provide, ref} from "vue";
import showInfo from "./ShowInfo.vue";

export default {
  components: {showInfo},
  setup() {
    provide("name", "whit")
    provide("age", 21)

    //共享一个响应式数据
    const height = ref(1.8)
    provide("height", height)

    const changHeight = () => {
      height.value++
    }

    return {showInfo, height, changHeight}
  }
}
</script>
```

```vue
<!--子组件-->
<template>
  <!--手动解包-->
  <!--<div>{{ name }}-&#45;&#45;{{ age }}-&#45;&#45;{{ //height.value }}</div>-->

  <!--不需要手动解包-->
  <div>{{ name }}---{{ age }}---{{ height }}</div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "ShowInfo",
  // inject 的 options api 注入，需要手动解包
  // inject:['name','age','height'],
  setup() {
    const name = inject("name")
    const age = inject("age")

    const height = inject("height")

    return {name, age, height}
  }
}
</script>
```

## 语法糖写法

### computed
```vue
<template>
  <div>----{{ names.firstName + ' ' + names.lastName }}----</div>
  <div>{{ fullName }}</div>
  <div>{{ score.name }}---{{ score.grade }}</div>
  <div>{{ info }}---</div>
  <button @click="setFull">xiuhai</button>
</template>

<script setup>
import {computed, reactive} from "vue";

const names = reactive({
  firstName: 'Johnson',
  lastName: "Xin"
})

const fullName = computed(() => {
  return names.firstName + " " + names.lastName
})

const score = reactive({
  name: "liSi",
  grade: 89
})

const setFull = () => {
  score.grade = 2313
}

const info = computed({
  set: function (newVal) {
    newVal.grade = 99
  },
  get: function () {
    return score.name + '---' + score.grade
  }
})
</script>
```

### Provide && Inject

```vue
<template>
  <ShowInfo_setup></ShowInfo_setup>

  <button @click="changeAge">又老一岁~</button>
</template>

<script setup>
import ShowInfo_setup from "./ShowInfo_setup.vue";
import {provide, ref} from "vue";

const age = ref(18)

provide("name", 'zhangSan')
provide("age", age)
provide("height", 1.8)

const changeAge = () => {
  age.value++;
}
</script>
```

```vue
<template>
  <div>{{ name }}---{{ height }}---{{ age }}</div>
</template>

<script setup>
import {inject} from "vue";

const name = inject("name")
const height = inject("height",12)

const age = inject("age")
</script>
```
