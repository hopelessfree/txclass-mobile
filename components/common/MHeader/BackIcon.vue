<template>
  <div class="back-icon">
    <i
      class="iconfont icon-arrow-left"
      v-show="backIconShow"
      @click="goBack"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    backIconShow: {
      type: Boolean,
      deafult: false,
    },
  },

  methods: {
    goBack() {
      this.$router.go("-1");
    },
  },
};
</script>

<style lang="scss" scoped>
.back-icon {
  display: flex;
  width: 0.44rem;
  height: 0.44rem;
  justify-content: center;
  align-items: center;
  color: #666;
}
</style>