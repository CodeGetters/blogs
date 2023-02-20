<template>
  <div class="timeLine-content">
  <span class="archives">
    {{ data }}
  </span>
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ['data', 'title']
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
