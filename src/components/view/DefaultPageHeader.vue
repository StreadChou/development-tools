<template>
  <div class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-icon v-if="icon" class="q-pr-xs" :name="icon" style="font-size: 1em;"/>
        {{ $t(i18nPrefix + '.title') }}
      </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: "DefaultPageHeader",
  props: ["i18nPrefix", "pageName", "icon"],
}
</script>

<style scoped>

</style>
