<template>
  <q-card flat bordered class="full-width">
    <DefaultToolsHeader :i18n-prefix="$options.i18nPrefix" :component-name="$options.name"></DefaultToolsHeader>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">
          {{ $t('noun.processName') }}:
        </span>
        <q-input standout="" dense v-model="process" clearable></q-input>
        <span class="row items-center">
          {{ $t('tips.youWillRun') }}: {{ command }}
        </span>
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-sm q-pl-lg">
      {{ $t('noun.tips') }}:{{ $t($options.i18nPrefix + '.tips') }}
    </q-card-section>
    <q-separator/>
    <q-card-actions>
      <q-btn flat color="primary" @click="$utils.operation.runCommand(generateCommand())">
        {{ $t('verb.runCommand') }}
      </q-btn>
      <q-btn flat color="secondary" @click="$utils.operation.copyTxt(generateCommand())">
        {{ $t('verb.clickToCopy') }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import DefaultToolsHeader from "../../view/DefaultToolsHeader";
export default {
  name: "FastKillProcess",
  components: {DefaultToolsHeader},
  i18nPrefix: "components.tools.processTools.FastKillProcess",
  data() {
    return {
      process: 'node',
    }
  },
  computed: {
    command: function () {
      return this.generateCommand();
    }
  },
  methods: {
    // generate mac command, todo platform
    generateCommand() {
      return `ps -ef | grep '${this.process}' | awk '{print $2}' | xargs kill -9`;
    }
  }
}
</script>

<style scoped>

</style>
