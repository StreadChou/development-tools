import {Notify} from "quasar";

class NotifyUtils {
  private static _instance: NotifyUtils;

  private constructor() {
  }

  public static getInstance(): NotifyUtils {
    this._instance = this._instance || new NotifyUtils()
    return this._instance;
  }

  public successTips(txt: string, subTxt?: string) {
    Notify.create({
      color: 'positive',
      position: 'top-right',
      message: txt,
      caption: subTxt,
    })
  }

  public failedTips(txt: string, subTxt?: string) {
    Notify.create({
      color: 'negative',
      position: 'top-right',
      message: txt,
      caption: subTxt,
    })
  }
}

const notifyUtils = NotifyUtils.getInstance();
export default notifyUtils;
