<template>
  <q-card bordered class="full-width">
    <q-card-section>
      <div class="text-h6">
        {{ $t('components.tools.moreTools.RandomString.title') }}
      </div>
    </q-card-section>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <q-select class="col" standout="" dense
                  :label="$t('components.tools.moreTools.RandomString.selectLabel')"
                  :options="options" v-model="selectOption"
                  :display-value="`${selectOption.label}: ${selectOption.description}`"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label v-html="scope.opt.label"/>
                <q-item-label caption>{{ scope.opt.description }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="row items-start q-gutter-sm items-stretch">
        <q-input class="col" standout="" dense v-model="length" type="text">
          <template v-slot:append>
            <q-btn round dense flat label="15" @click="length = 15"/>
            <q-btn round dense flat label="30" @click="length = 30"/>
            <q-btn round dense flat icon="add" @click="length ++"/>
            <q-btn round dense flat icon="remove" @click="length --"/>
          </template>
        </q-input>
      </div>
    </q-card-section>
    <q-card-section class="q-pl-lg">
      <q-btn class="full-width" color="primary" :label="$t('verb.generate')" @click="generate"/>
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
const cryptoRandomString = require('crypto-random-string');


export default {
  name: "RandomString",
  data() {
    return {
      options: [
        {
          label: 'base64',
          value: 'base64',
          description: this.$t('components.tools.moreTools.RandomString.base64Des'),
        },
        {
          label: 'url-safe',
          value: 'url-safe',
          description: this.$t('components.tools.moreTools.RandomString.urlSafeDes'),
        },
        {
          label: 'numeric',
          value: 'numeric',
          description: this.$t('components.tools.moreTools.RandomString.numericDes'),
        },
        {
          label: 'distinguishable',
          value: 'distinguishable',
          description: this.$t('components.tools.moreTools.RandomString.distinguishableDes'),
        },
        {
          label: 'ascii-printable',
          value: 'ascii-printable',
          description: this.$t('components.tools.moreTools.RandomString.asciiPrintableDes'),
        },
        {
          label: 'alphanumeric',
          value: 'alphanumeric',
          description: this.$t('components.tools.moreTools.RandomString.alphanumericDes'),
        }
      ],
      selectOption: {
        label: 'alphanumeric',
        value: 'alphanumeric',
        description: this.$t('components.tools.moreTools.RandomString.alphanumericDes'),
      },
      length: 10,
      result: "",
    }
  },
  methods: {
    generate() {
      this.result = cryptoRandomString({length: this.length, type: this.selectOption.value});
    },
  },
  created() {
    this.generate()
  }
}
</script>

<style scoped>

</style>
