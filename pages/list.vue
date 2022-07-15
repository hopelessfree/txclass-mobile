<template>
  <div class="container">
    <m-header :backIconShow="true" :listIconShow="true" />
    <list-tab :tabData="tabData" />
    <pull-down-loadding-text :loadingText="loadingText" :topPosition="0.79" />
    <scroll-wrapper :onPullDown="onPullDown">
      <course-list :courseData="currentCourseData" />
    </scroll-wrapper>
  </div>
</template>

<script>
import MHeader from "@/components/common/MHeader/index.vue";
import ScrollWrapper from "../components/common/ScrollWrapper/index.vue";
import MFooter from "../components/common/MFooter/index.vue";
import PullDownLoaddingText from "../components/common/PullDownLoadingText/index.vue";
import ListModel from "../models/List";
import ListTab from "../components/List/ListTab/index.vue";
import { PULL_DOWN_TEXT } from "../config/config";
import { mapState } from "vuex";
import { filterData } from "../utils/tools";
import CourseList from "../components/index/MCollection/CourseList/index.vue";

const listModel = new ListModel();
export default {
  name: "IndexPage",
  components: {
    MHeader,
    ScrollWrapper,
    MFooter,
    PullDownLoaddingText,
    ListTab,
    CourseList,
  },

  data: () => ({
    loadingText: PULL_DOWN_TEXT.ORIGIN,
    tabData: [],
    courseData: [],
    currentCourseData: [],
  }),

  computed: {
    ...mapState(["id"]),
  },

  watch: {
    id() {
      this.currentCourseData = filterData(this.courseData, this.id);
    },
  },

  async asyncData() {
    const data = await listModel.getListData();
    return { ...data };
  },

  methods: {
    async getListData() {
      const { tabData } = await listModel.getListData();
      this.tabData = tabData;
    },

    async onPullDown() {
      this.loadingText = PULL_DOWN_TEXT.PULLING;
      await this.getListData();
      this.loadingText = PULL_DOWN_TEXT.FINISHED;
      scroll.finishPullDown();
      setTimeout(() => {
        this.loadingText = PULL_DOWN_TEXT.ORIGIN;
      }, 1000);
    },
  },
};
</script>
