<template>
  <div class="recom-course-item">
    <a :href="data.href" target="_blank">
      <div class="cover">
        <img v-lazy="IMG_BASE + data.posterKey" :alt="data.title" />
      </div>
      <h1 class="course-tt">{{ data.title }}</h1>
      <div class="info">
        <img v-lazy="IMG_BASE + data.teacherImgKey" :alt="data.teacherName" class="teacher-img" />
        <span class="name">{{ data.teacherName }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import { URL } from '@/config/config';

export default {
  name: 'CourseItem',
  props: {
    data: Object
  },
  data() {
    return {
      IMG_BASE: URL.IMG_BASE
    }
  }
}
</script>

<style lang="less" scoped>
.recom-course-item {
  width: 50%;
  padding-left: .1rem;

  .course-tt {
    display: -webkit-box;
    height: .36rem;
    margin: .05rem 0;
    font-size: .14rem;
    line-height: .18rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .teacher-img {
      width: .25rem;
      height: .25rem;
      border-radius: 50%;
    }

    .name {
      font-size: .12rem;
      color: #999;
    }
  }
}
</style>
