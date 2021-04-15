<template>
  <q-page v-else class="full-width full-height">
    <ToolsList :componentsList="favouriteList"></ToolsList>
  </q-page>
</template>

<script>
import ToolsList from "../components/view/ToolsList";

export default {
  name: "Favourite",
  components: {ToolsList},
  data() {
    return {
      favouriteList: [],
    }
  },
  created() {
    this.favouriteList = this.$utils.favourite.getFavourite()
  }
}
</script>

<style scoped>

</style>
