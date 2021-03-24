<template>
  <q-card bordered class="full-width">
    <q-card-section>
      <div class="text-h6">{{ $t('component.timeTools.timestampTools.title') }}</div>
    </q-card-section>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">
          {{ $t('component.timeTools.timestampTools.nowTimestamp') }}
          ({{ $t('comm.action.clickToCopy') }}):
        </span>
        <q-btn flat color="primary" :label="nowTimestamp" @click="copyPrototype('nowTimestamp')"/>
      </div>
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">{{ $t('component.timeTools.timestampTools.timestampToTime') }}:</span>
        <q-input standout="" dense v-model="timestampInput" :suffix="$t('comm.time.unixTimestamp')">
          <template v-slot:after>
            <q-btn color="primary" :label="$t('comm.action.transform')" @click="changeTimestamp"/>
          </template>
        </q-input>
        <q-btn flat color="primary" :label="this.timestampResult" @click="copyPrototype('timestampResult')"/>
      </div>
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">{{ $t('component.timeTools.timestampTools.timeToTimestamp') }}:</span>
        <q-input standout="" dense v-model="timeInput" :suffix="this.timeInputType">
          <template v-slot:after>
            <q-btn color="primary" :label="$t('comm.action.transform')" @click="changeTime"/>
          </template>
        </q-input>
        <q-btn flat dense color="primary" :label="timeResult" @click="copyPrototype('timeResult')"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {copyToClipboard} from 'quasar'
import moment from 'moment'

export default {
  name: "TimestampTools",
  data() {
    return {
      nowTimestamp: 0,

      timestampInput: 0,
      timestampInputType: "ss",
      timestampResultType: "YYYY-MM-DD HH:mm:ss",
      timestampResult: "",

      timeInput: "",
      timeInputType: "YYYY-MM-DD HH:mm:ss",
      timeResult: 0,
    }
  },
  methods: {
    changeTimestamp() {
      this.timestampResult = moment(this.timestampInput * 1000).format(this.timestampResultType)
    },

    changeTime() {
      this.timeResult = Math.floor(moment(this.timeInput).valueOf() / 1000);
    },

    copyPrototype(prototype) {
      copyToClipboard(this[prototype])
        .then(() => {
          this.$q.notify({
            color: 'positive',
            position: 'top-right',
            message: "copy success"
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top-right',
            message: "copy error"
          })
        })
    }
  },
  created() {
    // GET NOW TIMESTAMP
    this.nowTimestamp = Math.floor((Date.now() / 1000));
    setInterval(() => {
      this.nowTimestamp++
    }, 1000)

    this.timestampInput = this.nowTimestamp;
    this.changeTimestamp();

    this.timeInput = this.timestampResult;
    this.changeTime();

  }
}
</script>

<style scoped>

</style>
