<template>
  <q-card bordered class="full-width">
    <q-card-section>
      <div class="text-h6">
        Fast Kill Process
      </div>
      <div class="text-subtitle2">
        Please enter the name of the process( EG: 'java' or 'php' or 'node')
      </div>
    </q-card-section>
    <q-separator inset=""/>
    <q-card-section class="q-gutter-sm q-pl-lg">
      <div class="row items-start q-gutter-sm items-stretch">
        <span class="row items-center">
          Process Name:
        </span>
        <q-input standout="" dense v-model="process" type="email"></q-input>
        <span class="row items-center">
          You will do: ps -ef | grep '{{ process }}' | awk '{print $2}' | xargs kill -9
        </span>
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-sm q-pl-lg">
      tips: This application is built using node, if you kill all node processes, this application will no longer work
      until you restart the application.
    </q-card-section>
    <q-separator/>
    <q-card-actions>
      <q-btn flat color="primary" @click="runCommand">
        Run Command
      </q-btn>
      <q-btn flat @click="process = ''">
        Clear Input
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
const child_process = require('child_process');

export default {
  name: "FastKillProcess",
  data() {
    return {
      process: 'node',
    }
  },
  methods: {
    runCommand() {
      let command = `ps -ef | grep '${this.process}' | awk '{print $2}' | xargs kill -9`;
      child_process.exec(command, (error, stdout, stderr) => {
        if (!!error) {
          this.$q.notify({
            color: 'negative',
            position: 'top-right',
            message: error.toString()
          })
        } else {
          this.$q.notify({
            color: 'positive',
            position: 'top-right',
            message: "run command success"
          })
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
