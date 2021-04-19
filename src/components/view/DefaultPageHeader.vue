<template>
  <div class="bg-primary text-white">
    <q-toolbar>
      <q-btn flat round dense icon="assignment_ind" />
      <q-toolbar-title>{{ $t(this.i18nPrefix + '.title') }}</q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: "DefaultPageHeader",
  props: ["i18nPrefix", "pageName"],
}
</script>

<style scoped>

</style>
