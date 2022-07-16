<template>
  <div class="list-tab">
    <div class="tab-wrapper">
      <ul
        ref="tabList"
        class="tab-list"
        :style="{ width: tabData.length * tabWidth + 'rem' }"
      >
        <tab-item
          v-for="(item, index) in tabData"
          :key="index"
          :data="item"
          @onTabClick="onTabClick(item.id)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TabItem from "./TabItem.vue";
export default {
  components: {
    TabItem,
  },
  props: {
    tabData: Array,
  },
  data: () => ({
    tabWidth: 1.2,
  }),
  methods: {
    onTabClick(id) {
      this.$store.commit("selectTab", id);
    },
  },
  
};
</script>

<style lang="less" scoped>
.list-tab {
  height: 0.35rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #eee;
  overflow: hidden;

  .tab-wrapper {
    height: 0.43rem;
    overflow-x: auto;
    overflow-y: hidden;

    .tab-list {
      height: 0.35rem;
    }
  }
}
</style>
