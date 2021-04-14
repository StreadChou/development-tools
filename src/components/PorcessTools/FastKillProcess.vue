<template>
  <q-card bordered class="full-width">
    <q-card-section>
      <div class="text-h6">
        {{ $t('component.processTools.fastKillProcess.title') }}
      </div>
      <div class="text-subtitle2">
        {{ $t('component.processTools.fastKillProcess.subtitle') }}
      </div>
    </q-card-section>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">
          {{ $t('noun.processName') }}:
        </span>
        <q-input standout="" dense v-model="process" clearable></q-input>
        <span class="row items-center">
          {{ $t('tip.youWillRun') }}: ps -ef | grep '{{ process }}' | awk '{print $2}' | xargs kill -9
        </span>
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-sm q-pl-lg">
      {{ $t('tips') }}:{{ $t('component.processTools.fastKillProcess.tips') }}
    </q-card-section>
    <q-separator/>
    <q-card-actions>
      <q-btn flat color="primary" @click="$utils.operationUtils.runCommand(generateCommand())">
        {{ $t('verb.runCommand') }}
      </q-btn>
      <q-btn flat color="secondary" @click="$utils.operationUtils.copyTxt(generateCommand())">
        {{ $t('verb.clickToCopy') }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "FastKillProcess",
  data() {
    return {
      process: 'node',
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
