<template>
  <div class="course-wrapper">
    <course-item v-for="(item, index) in courseData" :key="index" :data="item" />
  </div>
</template>

<script>
import CourseItem from './CourseItem.vue'
export default {
  components: { CourseItem },
  props: {
    courseData: Array,
  },
}
</script>

<style>
</style>