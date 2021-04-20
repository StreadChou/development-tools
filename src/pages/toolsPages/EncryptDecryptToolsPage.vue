<template>
  <q-page class="full-height full-width">
    <DefaultPageHeader :i18n-prefix="$options.i18nPrefix" :page-name="$options.name"></DefaultPageHeader>
  </q-page>
</template>

<script>
import DefaultPageHeader from "../../components/view/DefaultPageHeader";
export default {
  name: "EncryptDecryptToolsPage",
  components: {DefaultPageHeader},
  i18nPrefix: "page.EncryptDecryptToolsPage",
}
</script>

<style scoped>

</style>
