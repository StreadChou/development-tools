<template>
  <div>
    <div class="full-width" v-for="comp in showComponents">
      <div class="q-mb-lg" :is="comp"></div>
    </div>
  </div>
</template>

<script>
import TimestampTools from "../tools/timeTools/TimestampTools";
import FastKillProcess from "../tools/processTools/FastKillProcess";
import RandomString from "../tools/moreTools/RandomString";

export default {
  name: "ToolsList",
  props: ["componentsList"],
  components: {TimestampTools, FastKillProcess, RandomString},
  data() {
    return {
      showComponents: [],
    }
  },
  created() {
    this.showComponents = this.componentsList;
  }
}
</script>

<style scoped>

</style>
