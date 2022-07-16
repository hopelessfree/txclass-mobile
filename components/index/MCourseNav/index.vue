<template>
  <div class="nav-wrapper">
    <nav-item v-for="(item, index) in navData" :key="index" :data="item" />
  </div>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  components: { NavItem },
  props: {
    navData: Array,
  },
}
</script>

<style lang="less" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: .01rem solid #ddd;
  padding: .15rem .1rem .15rem 0;
}
</style>