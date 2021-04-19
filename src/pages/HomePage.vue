<template>
  <q-page class="justify-evenly">
    <div class="q-pt-lg q-px-lg">
      <q-input standout="" :label="$t('tips.enterSearchContent')" v-on:keyup.enter="search" dense
               v-model="searchContent">
        <template v-slot:after>
          <q-btn color="primary" :label="$t('verb.search')" @click="search"/>
        </template>
      </q-input>
    </div>
    <div class="q-pt-lg">
      <!--      <q-card flat>-->
      <!--        <q-card-section>-->
      <!--          <div class="text-h6">-->
      <!--            <q-spinner-bars class="q-pr-xs" color="orange" size="1.2em"/>-->

      <!--          </div>-->
      <!--        </q-card-section>-->
      <!--        <q-card-section class="q-pt-none q-pl-lg">-->

      <!--        </q-card-section>-->
      <!--      </q-card>-->
    </div>
  </q-page>
</template>

<script>

export default {
  name: "HomePage",
  i18nPrefix: "page.HomePage",
  data() {
    return {
      searchContent: ""
    }
  },
  methods: {
    search() {
      this.$router.push({
        path: '/search',
        query: {
          search: this.searchContent,
        }
      });
    },
  },
}
</script>
