<template>
  <div class="container">
    <m-header :backIconShow="true" :listIconShow="false" />
    <m-error />
  </div>
</template>

<script>
import MHeader from "../components/common/MHeader";
import MError from "../components/common/MError"

export default {
  props: ["error"],
  components: {
    MHeader,
    MError,
  },
};
</script>