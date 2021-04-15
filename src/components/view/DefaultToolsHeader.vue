<template>
  <q-card-section>
    <div class="row items-center no-wrap">
      <div class="col">
        <div class="text-h6">{{ $t(this.i18nPrefix + '.title') }}</div>
        <div v-if="$te(this.i18nPrefix + '.subtitle')" class="text-subtitle2">
          {{ $t(this.i18nPrefix + '.subtitle') }}
        </div>
      </div>
      <div class="col-auto">
        <q-btn flat round icon="favorite"
               :color="favouriteState ? 'red' : 'grey'"
               @click="switchFavourite()"/>
      </div>
    </div>
  </q-card-section>
</template>

<script>
export default {
  name: "DefaultToolsHeader",
  props: ["i18nPrefix", "componentName"],
  data() {
    return {
      favouriteState: false,
    }
  },
  methods: {
    checkFavourite() {
      this.favouriteState = this.$utils.favourite.checkFavourite(this.componentName)
    },

    switchFavourite() {
      this.$utils.favourite.switchFavourite(this.componentName)
      this.checkFavourite();
    }
  },
  created() {
    this.checkFavourite();
  }

}
</script>

<style scoped>

</style>
