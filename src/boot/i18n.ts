import {boot} from 'quasar/wrappers';
import messages from 'src/i18n';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {Cookies} from 'quasar'

declare module 'vue/types/vue' {
  interface Vue {
    i18n: VueI18n;
  }
}

Vue.use(VueI18n);

let local = "en-us";
if (Cookies.has('locale')) {
  local = Cookies.get('locale');
}

export const i18n = new VueI18n({
  locale: local,
  fallbackLocale: local,
  messages
});

export default boot(({app}) => {
  // Set i18n instance on app
  app.i18n = i18n;
});
