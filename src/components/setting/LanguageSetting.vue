<template>
  <q-select v-model="lang" :options="langOptions" standout="bg-teal text-white" dense emit-value map-options>
    <template v-slot:before>
      <span class="text-h6">{{ $t('components.setting.LanguageSetting.label') }}: </span>
    </template>
  </q-select>
</template>
<script>
import {LanguageConst} from "../../i18n/LanguageConst";

export default {
  name: "LanguageSetting",
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: LanguageConst,
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang
      localStorage.setItem("locale", lang)
    }
  }
}
</script>

<style scoped>

</style>
