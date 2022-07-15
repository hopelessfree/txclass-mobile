<template>
  <div class="collection-wrapper">
    <collection-item v-for="(item, index) in collectionData" :key="index" :data="item" />
  </div>
</template>

<script>
import CollectionItem from './CollectionItem.vue'
export default {
  components: { CollectionItem },
  props: {
    collectionData: Array,
  }
}
</script>

<style>
</style>