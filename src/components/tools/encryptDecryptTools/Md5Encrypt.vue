<template>
  <q-card flat bordered class="full-width">
    <DefaultToolsHeader :i18n-prefix="$options.i18nPrefix" :component-name="$options.name"></DefaultToolsHeader>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <q-input v-model="inputContent" filled autogrow type="textarea" />
    </q-card-section>
    <q-card-section class="q-pl-lg">
      <q-btn unelevated class="full-width" color="primary" :label="$t('verb.generate')" @click="encrypt"/>
    </q-card-section>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">
          {{ $t('tips.generateResult') }}:
          ({{ $t('verb.clickToCopy') }}):
        </span>
        <q-btn flat color="primary" style="text-transform: none!important;" :label="result"
               @click="$utils.operation.copyTxt(result)"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import DefaultToolsHeader from "../../view/DefaultToolsHeader";
const crypto = require('crypto');

export default {
  name: "Md5Encrypt",
  i18nPrefix: "components.tools.encryptDecryptTools.Md5Encrypt",
  components: {DefaultToolsHeader},
  data() {
    return {
      inputContent: "",
      result: "",
    }
  },
  methods: {
    encrypt() {
      this.result = crypto.createHash('md5').update(this.inputContent).digest('base64');
    }
  },
  created() {
    this.encrypt();
  }
}
</script>

<style scoped>

</style>
