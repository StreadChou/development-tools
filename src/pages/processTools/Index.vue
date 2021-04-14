<template>
  <q-page class="full-height full-width">
    <div class="row full-width q-pa-lg">
      <FastKillProcess></FastKillProcess>
    </div>
  </q-page>
</template>

<script>
import FastKillProcess from "../../components/tools/processTools/FastKillProcess";

export default {
  name: "ProcessToolsIndex",
  components: {FastKillProcess}
}
</script>

<style scoped>

</style>
