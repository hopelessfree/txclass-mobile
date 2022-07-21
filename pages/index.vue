<template>
  <div class="container">
    <m-header :backIconShow="true" :listIconShow="true" />
    <pull-down-loadding-text :loadingText="loadingText" />
    <scroll-wrapper :onPullDown="onPullDown">
      <m-swiper :sliderData="sliderData" />
      <main-title title="前端进修班" />
      <m-course-nav :navData="navData" />
      <main-title title="平台合作方" />
      <m-cooperation :linkData="linkData" />
      <main-title title="官方推荐课程" />
      <m-recom-course :recomCourseData="recomCourseData" />
      <m-collection :collectionData="collectionData" />
      <main-title title="全网优秀老师" :linkShow="false" />
      <m-teacher :teacherData="teacherData" />
      <m-footer />
    </scroll-wrapper>
  </div>
</template>

<script>
import MHeader from "@/components/common/MHeader/index.vue";
import ScrollWrapper from "../components/common/ScrollWrapper/index.vue";
import MFooter from "../components/common/MFooter/index.vue";
import IndexModel from "@/models/Index";
import MSwiper from "../components/index/MSwiper/index.vue";
import MainTitle from "../components/common/MainTitle/index.vue";
import MCourseNav from "../components/index/MCourseNav/index.vue";
import MCooperation from "../components/index/MCooperation/index.vue";
import MRecomCourse from "../components/index/MRecomCourse/index.vue";
import MCollection from "../components/index/MCollection/index.vue";
import MTeacher from "../components/index/MTeacher/index.vue";
import PullDownLoaddingText from "../components/common/PullDownLoadingText/index.vue";
import { PULL_DOWN_TEXT } from "../config/config";

const indexModel = new IndexModel();

export default {
  name: "IndexPage",
  components: {
    MHeader,
    ScrollWrapper,
    MFooter,
    MSwiper,
    MainTitle,
    MCourseNav,
    MCooperation,
    MRecomCourse,
    MCollection,
    MTeacher,
    PullDownLoaddingText,
  },

  data() {
    return {
      loadingText: PULL_DOWN_TEXT.ORIGIN,
    };
  },

  async asyncData() {
    const data = await indexModel.getHomeData();

    return {
      ...data,
    };
  },

  methods: {
    async getHomeData() {
      const data = await indexModel.getHomeData();
      const {
        sliderData,
        navData,
        linkData,
        recomCourseData,
        collectionData,
        teacherData,
      } = data;

      this.sliderData = sliderData;
      this.navData = navData;
      this.linkData = linkData;
      this.recomCourseData = recomCourseData;
      this.collectionData = collectionData;
      this.teacherData = teacherData;
    },

    async onPullDown(scroll) {
      this.loadingText = PULL_DOWN_TEXT.PULLING;
      await this.getHomeData();
      this.loadingText = PULL_DOWN_TEXT.FINISHED;
      scroll.finishPullDown();
      setTimeout(() => {
        this.loadingText = PULL_DOWN_TEXT.ORIGIN;
      }, 1000);
    },
  },
};
</script>
