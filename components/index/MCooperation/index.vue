<template>
  <div class="cooperation-wrapper">
    <cooperation-item v-for="(item, index) in linkData" :key="index" :data="item" />
  </div>
</template>

<script>
import CooperationItem from './CooperationItem.vue'

export default {
  components: { CooperationItem },
  props: {
    linkData: Array
  },
}
</script>

<style lang="scss" scoped>
.cooperation-wrapper {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: .01rem solid #ddd;
}
</style>