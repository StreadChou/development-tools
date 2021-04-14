import {boot} from 'quasar/wrappers';
import operationUtils from "boot/utils/operationUtils";
import notifyUtils from "boot/utils/notifyUtils";

export const utils = {
  operationUtils: operationUtils,
  notifyUtils: notifyUtils,
}


declare module 'vue/types/vue' {
  interface Vue {
    $utils: typeof utils;
  }
}

export default boot(({Vue}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$utils = utils;
});
