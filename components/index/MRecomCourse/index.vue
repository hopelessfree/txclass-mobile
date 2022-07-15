<template>
  <div class="course-wrapper">
    <recom-course-item v-for="(item, index) in recomCourseData" :key="index" :data="item" />
  </div>
</template>

<script>
import RecomCourseItem from './RecomCourseItem.vue'
export default {
  components: { RecomCourseItem },
  props: {
    recomCourseData: Array,
  }
}
</script>

<style lang="scss" scoped>
.course-wrapper {
  display: flex;
  flex-direction: row;
  padding: .15rem .1rem .15rem 0;
  background-color: #fff;
  border-bottom: .01rem solid #ddd;
}
</style>