<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay

      :width="250"
      :breakpoint="500"
    >
      <q-scroll-area class="fit bg-blue-grey-8 text-white">
        <q-list class="bg-blue-grey-10" padding>

          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home"/>
            </q-item-section>
            <q-item-section>{{ $t('page.HomePage.navigation') }}</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/favourite">
            <q-item-section avatar>
              <q-icon name="star"/>
            </q-item-section>
            <q-item-section>{{ $t('page.FavouritePage.navigation') }}</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/timeTools/index">
            <q-item-section avatar>
              <q-icon name="query_builder"/>
            </q-item-section>
            <q-item-section>{{ $t('page.TimeToolsPage.navigation') }}</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/processTools/index">
            <q-item-section avatar>
              <q-icon name="schema"/>
            </q-item-section>
            <q-item-section>{{ $t('page.ProcessToolsPage.navigation') }}</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/encryptDecryptTools/index">
            <q-item-section avatar>
              <q-icon name="lock"/>
            </q-item-section>
            <q-item-section>{{ $t('page.EncryptDecryptToolsPage.navigation') }}</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/moreTools/index">
            <q-item-section avatar>
              <q-icon name="more"/>
            </q-item-section>
            <q-item-section>{{ $t('page.MoreToolsPage.navigation') }}</q-item-section>
          </q-item>

        </q-list>
        <q-separator/>
        <q-list padding>
          <q-item clickable v-ripple to="/setting/Index">
            <q-item-section avatar>
              <q-icon name="settings"/>
            </q-item-section>
            <q-item-section>{{ $t('page.SettingPage.navigation') }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-dialog v-model="searchFlag">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your SearchContent</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="searchContent" autofocus @keyup.enter="search"/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup/>
          <q-btn flat label="Search" @click="search" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      miniState: true,
      searchFlag: false,
      searchContent: ""
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
    },

    search() {
      this.searchFlag = false;
      this.$router.push({
        path: '/search',
        query: {
          search: this.searchContent,
        }
      });
    },

  },
  created() {
    this.$utils.hotKeys.listenKeyBoard();
    this.$utils.hotKeys.registerHotKey(() => {
      this.searchFlag = true;
      this.searchContent = "";
    }, (keyBoardEvent) => {
      return keyBoardEvent.shiftKey && keyBoardEvent.code === "KeyG";
    });
  }
}
</script>
