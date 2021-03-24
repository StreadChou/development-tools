<template>
  <q-page class="full-height full-width">
    <div class="row full-width q-pa-lg">
      <LanguageSetting></LanguageSetting>
    </div>
  </q-page>
</template>

<script>
import LanguageSetting from "../../components/Setting/LanguageSetting";
export default {
  name: "SettingIndex",
  components: {LanguageSetting}
}
</script>

<style scoped>

</style>
