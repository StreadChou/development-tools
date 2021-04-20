<template>
  <q-page class="full-height full-width">
    <DefaultPageHeader :i18n-prefix="$options.i18nPrefix" :page-name="$options.name" icon="query_builder"></DefaultPageHeader>
    <div class="row full-width q-pa-lg">
      <TimestampTools></TimestampTools>
    </div>
  </q-page>
</template>

<script>
import TimestampTools from "../../components/tools/timeTools/TimestampTools";
import DefaultPageHeader from "../../components/view/DefaultPageHeader";

export default {
  name: "TimeToolsPage",
  i18nPrefix: "page.TimeToolsPage",
  components: {DefaultPageHeader, TimestampTools},
}
</script>

<style scoped>

</style>
