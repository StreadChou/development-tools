class HotKeyUtils {
  private static _instance: HotKeyUtils;

  private hotKeys: { run: Function, trigger: Function }[] = [];


  private constructor() {
  }

  public static getInstance(): HotKeyUtils {
    this._instance = this._instance ?? new HotKeyUtils();
    return this._instance;
  }

  public registerHotKey(run: Function, trigger: Function) {
    this.hotKeys.push({run: run, trigger: trigger});
  }

  private getFunctionByKeyBoardEvent(keyBoardEvent: KeyboardEvent): Function | null {
    for (let hotKey of this.hotKeys) {
      if (hotKey.trigger(keyBoardEvent)) {
        return hotKey.run;
      }
    }
    return null;
  }

  public listenKeyBoard() {
    document.onkeyup = (keyBoardEvent: KeyboardEvent) => {
      let res = this.getFunctionByKeyBoardEvent(keyBoardEvent);
      if (res !== null) {
        res();
      }
    }
  }
}

const hotKeyUtils = HotKeyUtils.getInstance();
export default hotKeyUtils;
