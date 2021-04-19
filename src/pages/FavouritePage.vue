<template>
  <q-page v-else class="full-width full-height">
    <DefaultPageHeader :i18n-prefix="$options.i18nPrefix" :page-name="$options.name"></DefaultPageHeader>
    <ToolsList class="q-pa-lg" :componentsList="favouriteList"></ToolsList>
  </q-page>
</template>

<script>
import ToolsList from "../components/view/ToolsList";
import DefaultPageHeader from "../components/view/DefaultPageHeader";

export default {
  name: "FavouritePage",
  i18nPrefix: "page.FavouritePage",
  components: {DefaultPageHeader, ToolsList},
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
