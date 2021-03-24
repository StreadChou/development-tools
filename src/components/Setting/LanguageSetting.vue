<template>
  <!-- ...... -->
  <q-select
    v-model="lang"
    :options="langOptions"
    label="Language Setting"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>


<script>
export default {
  name: "LanguageSetting",
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'zh-cn', label: '简体中文' }
      ]
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>

</style>
