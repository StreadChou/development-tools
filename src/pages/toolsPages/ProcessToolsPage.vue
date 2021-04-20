<template>
  <q-page class="full-height full-width">
    <DefaultPageHeader :i18n-prefix="$options.i18nPrefix" :page-name="$options.name" icon="schema"></DefaultPageHeader>
    <div class="row full-width q-pa-lg">
      <FastKillProcess></FastKillProcess>
    </div>
  </q-page>
</template>

<script>
import FastKillProcess from "../../components/tools/processTools/FastKillProcess";
import DefaultPageHeader from "../../components/view/DefaultPageHeader";

export default {
  name: "ProcessToolsPage",
  i18nPrefix: "page.ProcessToolsPage",
  components: {DefaultPageHeader, FastKillProcess}
}
</script>

<style scoped>

</style>
