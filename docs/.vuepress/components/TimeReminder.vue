<template>
  <div class="reminderBox">
    <span>本篇文章距发布已过去{{ overTime }}天！</span>
  </div>
</template>

<script>
import dayDiff from '../theme/helpers/timeFormat.js'
export default {
  name: "TimeReminder",
  data() {
    return {
      overTime: 0
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
