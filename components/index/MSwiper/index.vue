<template>
  <swiper :options="swiperOptions" ref="indexSwiper">
    <swiper-slide v-for="(item, index) in sliderData" :key="index">
      <m-swiper-item :data="item" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import MSwiperItem from "./MSwiperItem.vue";

export default {
  props: {
    sliderData: {
      type: Array,
      default: [],
    },
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    const swiperOptions = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      loopedSliders: 1,
      autoplay: true,
    };

    return {
      swiperOptions,
    };
  },

  components: {
    Swiper,
    SwiperSlide,
    MSwiperItem,
  },
};
</script>

<style lang="less" scoped>
/deep/ .swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>