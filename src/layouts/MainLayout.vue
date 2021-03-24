<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay

      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>

          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home"/>
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star"/>
            </q-item-section>

            <q-item-section>
              Favourite
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/timeTools/index">
            <q-item-section avatar>
              <q-icon name="query_builder"/>
            </q-item-section>

            <q-item-section>
              Time Tools
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/processTools/index">
            <q-item-section avatar>
              <q-icon name="schema"/>
            </q-item-section>

            <q-item-section>
              Process Tools
            </q-item-section>
          </q-item>


          <q-separator/>

          <q-item clickable v-ripple to="/setting/Index">
            <q-item-section avatar>
              <q-icon name="settings"/>
            </q-item-section>

            <q-item-section>
              Setting
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      miniState: true
    }
  },
  methods: {
    minimize() {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    maximize() {
      if (process.env.MODE === 'electron') {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()

        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    },

    closeApp() {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}
</script>
