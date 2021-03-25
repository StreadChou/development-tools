<template>
  <q-select v-model="lang" :options="langOptions" standout="bg-teal text-white" dense emit-value map-options>
    <template v-slot:before>
      <span class="text-h6">{{ $t('component.setting.languageSetting.label') }}: </span>
    </template>
  </q-select>
</template>


<script>
import {Cookies} from "quasar";

export default {
  name: "LanguageSetting",
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        {value: 'en-us', label: 'English'},
        {value: 'zh-cn', label: '简体中文'}
      ]
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang
      this.$q.cookies.set('locale', lang);
    }
  }
}
</script>

<style scoped>

</style>
