<template>
  <q-card bordered class="full-width">
    <DefaultToolsHeader :i18n-prefix="$options.i18nPrefix" :component-name="$options.name"></DefaultToolsHeader>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">
          {{ $t($options.i18nPrefix + '.nowTimestamp') }}
          ({{ $t('verb.clickToCopy') }}):
        </span>
        <q-btn flat color="primary" :label="nowTimestamp" @click="$utils.operation.copyTxt(nowTimestamp)"/>
      </div>
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">{{ $t($options.i18nPrefix + '.timestampToTime') }}:</span>
        <q-input standout="" dense v-model="timestampInput" :suffix="$t('noun.unixTimestamp')">
          <template v-slot:after>
            <q-btn color="primary" :label="$t('verb.transform')" @click="changeTimestamp"/>
          </template>
        </q-input>
        <q-btn flat color="primary" :label="this.timestampResult"
               @click="$utils.operation.copyTxt(timestampResult)"/>
      </div>
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">{{ $t($options.i18nPrefix + '.timeToTimestamp') }}:</span>
        <q-input standout="" dense v-model="timeInput" :suffix="this.timeInputType">
          <template v-slot:after>
            <q-btn color="primary" :label="$t('verb.transform')" @click="changeTime"/>
          </template>
        </q-input>
        <q-btn flat dense color="primary" :label="timeResult" @click="$utils.operation.copyTxt(timeResult)"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import moment from 'moment'
import DefaultToolsHeader from "../../view/DefaultToolsHeader";

export default {
  name: "TimestampTools",
  i18nPrefix: "components.tools.timeTools.TimestampTools",
  components: {DefaultToolsHeader},
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
