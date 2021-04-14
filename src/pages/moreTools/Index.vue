<template>
  <q-page class="full-height full-width">
    <div class="row full-width q-pa-lg">
      <RandomString></RandomString>
    </div>
  </q-page>
</template>

<script>
import RandomString from "../../components/tools/moreTools/RandomString";

export default {
  name: "MoreIndex",
  components: {RandomString}
}
</script>

<style scoped>

</style>
