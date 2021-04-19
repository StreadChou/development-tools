<template>
  <q-page v-if="nowSearch" class="full-width full-height">
    <div class="q-pt-lg q-px-lg">
      <q-input standout="" :label="$t('tips.enterSearchContent')" v-on:keyup.enter="search" dense v-model="searchInput">
        <template v-slot:after>
          <q-btn color="primary" unelevated :label="$t('verb.search')" @click="search"/>
        </template>
      </q-input>
    </div>
    <div class="row full-width items-center justify-evenly search-layout-middle q-py-sm shadow-1">
      <p class="q-my-none">{{ $t('page.search.youAreSearching') }} <strong>{{ nowSearch }}</strong></p>
    </div>
    <div v-if="searchComponents.length" class="row scroll-y full-width search-layout-bottom q-pt-lg bg-grey-4">
      <div class="q-px-lg q-pb-lg full-width" v-for="comp in searchComponents">
        <div :is="comp"></div>
      </div>
    </div>
    <div v-else class="row scroll-y full-width search-layout-bottom q-pt-lg bg-grey-4">
      <div class="q-px-lg q-pb-lg full-width">
        {{ $t('page.search.noResult') }}
      </div>
    </div>
  </q-page>
  <q-page v-else class="row items-center justify-evenly">
    <q-input class="col-6" standout="" :label="$t('tips.enterSearchContent')" v-on:keyup.enter="search" dense
             v-model="searchInput">
      <template v-slot:after>
        <q-btn color="primary" unelevated :label="$t('verb.search')" @click="search"/>
      </template>
    </q-input>
  </q-page>
</template>

<script>
import TimestampTools from "../components/tools/timeTools/TimestampTools";
import FastKillProcess from "../components/tools/processTools/FastKillProcess";
import RandomString from "../components/tools/moreTools/RandomString";

export default {
  name: "SearchPage",
  i18nPrefix: "page.SearchPage",
  components: {
    TimestampTools,
    FastKillProcess,
    RandomString,
  },
  data() {
    return {
      searchInput: "",
      nowSearch: "",
      searchComponents: [],
    }
  },
  methods: {
    search() {
      this.nowSearch = this.searchInput;
      this.searchComponents = [];
      if (!this.nowSearch) return false;
      this.searchComponents = this.$toolsMap.searchKeywords(this.nowSearch);
    },
  },
  created() {
    this.searchInput = this.$route.query.search
    this.search();
  }
}
</script>

<style scoped lang="scss">

</style>
