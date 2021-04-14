<template>
  <q-page class="full-height full-width">
    <div class="row full-width q-pa-lg">
      <q-card bordered class="full-width">
        <q-card-section>
          <div class="text-h6">{{ $t('page.setting.title') }}</div>
        </q-card-section>
        <q-separator inset=""/>
        <q-card-section class="q-pl-lg">
          <LanguageSetting></LanguageSetting>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script>
import LanguageSetting from "../../components/setting/LanguageSetting";

export default {
  name: "SettingIndex",
  components: {LanguageSetting}
}
</script>

<style scoped>

</style>
