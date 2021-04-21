<template>
  <q-page class="full-height full-width">
    <DefaultPageHeader :i18n-prefix="$options.i18nPrefix" :page-name="$options.name" icon="lock"></DefaultPageHeader>
    <div class="row full-width q-pa-lg">
      <Md5Encrypt></Md5Encrypt>
    </div>
  </q-page>
</template>

<script>
import DefaultPageHeader from "../../components/view/DefaultPageHeader";
import Md5Encrypt from "../../components/tools/encryptDecryptTools/Md5Encrypt";
export default {
  name: "EncryptDecryptToolsPage",
  components: {Md5Encrypt, DefaultPageHeader},
  i18nPrefix: "page.EncryptDecryptToolsPage",
}
</script>

<style scoped>

</style>
