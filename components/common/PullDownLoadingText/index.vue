<template>
  <div class="pull-down-loading" :style="{ top: topPosition + 'rem' }">
    {{ loadingText }}
  </div>
</template>

<script>
export default {
  props: {
    loadingText: String,
    topPosition: {
      type: Number,
      default() {
        return 0.44;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.pull-down-loading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 0.5rem;
  color: #999;
  font-size: 0.14rem;
}
</style>