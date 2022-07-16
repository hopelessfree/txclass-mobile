<template>
  <header class="header">
    <back-icon :backIconShow="backIconShow" />
    <m-logo />
    <list-icon :listIconShow="listIconShow" />
  </header>
</template>

<script>
import BackIcon from "./BackIcon.vue";
import ListIcon from "./ListIcon.vue";
import MLogo from "./MLogo.vue";
export default {
  props: {
    backIconShow: {
      type: Boolean,
      default: false,
    },
    listIconShow: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    BackIcon,
    ListIcon,
    MLogo,
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 0.44rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #ddd;
}
</style>