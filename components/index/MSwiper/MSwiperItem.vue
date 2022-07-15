<template>
  <a :href="data.href">
    <img :src="IMG_BASE + data.imgKey" :alt="data.title">
  </a>
</template>

<script>
import { URL } from "@/config/config"
export default {
  props: {
    data: {
      type: Object,
      default: {},
    }
  },

  data() {
    return {
      ...URL
    }
  }
};
</script>

<style>
</style>