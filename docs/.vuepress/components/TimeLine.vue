<template>
  <div class="timeLine-content">
    <a :href="link" class="timeLine-link" style="text-decoration: none">
      <span class="archives">{{ data }}</span>
      <span class="title">{{ title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: "JavaScript:;"
    },
    data: {
      type: String,
      required: true,
      default: ""
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.timeLine-content {
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.archives {
  font-size: 14px;
  padding-right: 20px;
  color: rgb(134, 131, 131);
}
</style>
