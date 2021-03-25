<template>
  <q-card bordered class="full-width">
    <q-card-section>
      <div class="text-h6">
        {{ $t('component.moreTools.randomString.title') }}
      </div>
    </q-card-section>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <q-select class="col" standout="" dense
                  :label="$t('component.moreTools.randomString.selectLabel')"
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
      <q-btn class="full-width" color="primary" :label="$t('comm.action.generate')" @click="generate"/>
    </q-card-section>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">
          {{ $t('comm.action.generateResult') }}:
          ({{ $t('comm.action.clickToCopy') }}):
        </span>
        <q-btn flat color="primary" style="text-transform: none!important;" :label="result"
               @click="copyPrototype('result')"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {copyToClipboard} from "quasar";

const cryptoRandomString = require('crypto-random-string');


export default {
  name: "RandomString",
  data() {
    return {
      options: [
        {
          label: 'base64',
          value: 'base64',
          description: this.$t('component.moreTools.randomString.base64Des'),
        },
        {
          label: 'url-safe',
          value: 'url-safe',
          description: this.$t('component.moreTools.randomString.urlSafeDes'),
        },
        {
          label: 'numeric',
          value: 'numeric',
          description: this.$t('component.moreTools.randomString.numericDes'),
        },
        {
          label: 'distinguishable',
          value: 'distinguishable',
          description: this.$t('component.moreTools.randomString.distinguishableDes'),
        },
        {
          label: 'ascii-printable',
          value: 'ascii-printable',
          description: this.$t('component.moreTools.randomString.asciiPrintableDes'),
        },
        {
          label: 'alphanumeric',
          value: 'alphanumeric',
          description: this.$t('component.moreTools.randomString.alphanumericDes'),
        }
      ],
      selectOption: {
        label: 'alphanumeric',
        value: 'alphanumeric',
        description: this.$t('component.moreTools.randomString.alphanumericDes'),
      },
      length: 10,
      result: "",
    }
  },
  methods: {
    generate() {
      this.result = cryptoRandomString({length: this.length, type: this.selectOption.value});
    },
    copyPrototype(prototype) {
      copyToClipboard(this[prototype])
        .then(() => {
          this.$q.notify({
            color: 'positive',
            position: 'top-right',
            message: this.$t('success'),
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top-right',
            message: this.$t('failed'),
          })
        })
    }
  },
  created() {
    this.generate()
  }
}
</script>

<style scoped>

</style>
