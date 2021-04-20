<template>
  <q-page class="full-height full-width">
    <DefaultPageHeader :i18n-prefix="$options.i18nPrefix" :page-name="$options.name" icon="settings"></DefaultPageHeader>
    <div class="row full-width q-pa-lg">
      <q-card flat bordered class="full-width">
        <q-card-section class="q-pl-lg">
          <LanguageSetting></LanguageSetting>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script>
import LanguageSetting from "../components/setting/LanguageSetting";
import DefaultPageHeader from "../components/view/DefaultPageHeader";

export default {
  name: "SettingPage",
  i18nPrefix: "page.SettingPage",
  components: {DefaultPageHeader, LanguageSetting}
}
</script>

<style scoped>

</style>
