<template>
  <div class="teacher-wrapper">
    <teacher-item v-for="(item, index) in teacherData" :key="index" :data="item" />
  </div>
</template>

<script>
import TeacherItem from './TeacherItem.vue'
export default {
  components: {
    TeacherItem,
  },
  props: {
    teacherData: Array,
  }
}
</script>

<style lang="less" scoped>
.teacher-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: .1rem 0 .1rem .1rem;
  background-color: #fff;
  border-bottom: .01rem solid #ddd;
}
</style>