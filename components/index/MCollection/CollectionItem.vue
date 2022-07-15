<template>
  <div class="collection-item">
    <CommonMainTitle :title="data.title" :linkShow="true" />
    <course-list :courseData="data.courseDataList" />
  </div>
</template>

<script>
import CourseList from './CourseList/index.vue';
export default {
  props: {
    data: Object,
  },
  components: { CourseList }
}
</script>

<style>
</style>