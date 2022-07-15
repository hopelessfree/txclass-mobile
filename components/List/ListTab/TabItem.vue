<template>
  <li
    :class="['tab-item', { current: data.id === $store.state.id }]"
    @click="onTabClick($event)"
  >
    {{ data.title }}
  </li>
</template>

<script>
import { scrollToPosition } from "../../../utils/tools";

export default {
  props: {
    data: Object,
  },

  methods: {
    onTabClick(event) {
      this.$emit("onTabClick");
      scrollToPosition(event.target);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-item {
  float: left;
  width: 1.2rem;
  height: 100%;
  font-size: 0.14rem;
  text-align: center;
  line-height: 0.35rem;

  &.current {
    color: #23b8ff;
    border-bottom: 2px solid #23b8ff;
  }
}
</style>