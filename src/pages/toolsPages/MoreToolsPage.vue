<template>
  <q-page class="full-height full-width">
    <DefaultPageHeader :i18n-prefix="$options.i18nPrefix" :page-name="$options.name" icon="more"></DefaultPageHeader>
    <div class="row full-width q-pa-lg">
      <RandomString></RandomString>
    </div>
  </q-page>
</template>

<script>
import RandomString from "../../components/tools/moreTools/RandomString";
import DefaultPageHeader from "../../components/view/DefaultPageHeader";

export default {
  name: "MoreToolsPage",
  i18nPrefix: "page.MoreToolsPage",
  components: {DefaultPageHeader, RandomString}
}
</script>

<style scoped>

</style>
