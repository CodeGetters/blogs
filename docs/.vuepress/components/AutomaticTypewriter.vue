<template>
    <div class="container">
        <div class="textArea" :style="colorTheme(textTheme)">{{ textCon }}</div>
    </div>
</template>

<script>
import {onMounted, ref} from "@vue/composition-api";

export default {
    props: {
        displayCon: {
            type: String,
            default: '你还没有填入数据哦！'
        },
        textTheme: {
            type: String,
            default: "blue"
        }
    },
    setup(props) {
        const text = props.displayCon
        const textTheme = props.textTheme
        const textCon = ref('')

        function colorTheme(textTheme) {
            const style = {}
            style.color = textTheme
            return style
        }

        function autoPrint(textArea) {
            let index = 0
            let str = ''
            let timer = null
            timer = setInterval(() => {
                if (index > text.length - 1) {
                    clearInterval(timer)
                    return
                }
                str = str + text.substring(index, index + 1)
                index++;
                textArea.value = str
            }, 220)
        }

        onMounted(() => {
            autoPrint(textCon)
        })
        return {textCon,colorTheme,textTheme}
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
}

.textArea {
    color: #000;
    font-size: 14px;
    display: block;
    word-break: break-all;
    white-space: normal;
    line-height: 30px;
}

.textArea:after {
    content: "";
    margin-left: 1px;
    border-right: 1px solid #000;
    animation: cursorBlinks 1s linear infinite;
}

.dark .textArea {
    color: #fff;
}

@keyframes cursorBlinks {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
