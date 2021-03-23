<template>
  <q-page class="full-height full-width">
    <div class="row full-width q-pa-lg">
      <TimestampTools></TimestampTools>
    </div>
  </q-page>
</template>

<script>
import TimestampTools from "../../components/TimeTools/TimestampTools";

export default {
  name: "TimeToolsIndex",
  components: {TimestampTools},
}
</script>

<style scoped>

</style>
