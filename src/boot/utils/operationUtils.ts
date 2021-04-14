import {i18n} from "boot/i18n";
import {copyToClipboard} from 'quasar';
import notifyUtils from "boot/utils/notifyUtils";
import {ExecException} from "child_process";

const child_process = require('child_process');

class OperationUtils {
  private static _instance: OperationUtils;

  private constructor() {
  }

  public static getInstance(): OperationUtils {
    this._instance = this._instance || new OperationUtils()
    return this._instance;
  }

  copyTxt(txt: string) {
    copyToClipboard(txt ?? "").then(() => {
      let successString: string = (i18n.t("tips.copySuccess") ?? "success").toString();
      notifyUtils.successTips(successString);
    }).catch(() => {
      let failedString: string = (i18n.t("tips.copyFailed") ?? "success").toString();
      notifyUtils.failedTips(failedString);
    })
  }

  runCommand(command: string) {
    child_process.exec(command, (error: ExecException, stdout: string, stderr: string) => {
      if (!error) {
        let successString: string = (i18n.t("tips.commandRunSuccess") ?? "success").toString();
        notifyUtils.successTips(successString);
      } else {
        let failedString: string = (i18n.t("tips.commandRunFailed") ?? "success").toString();
        let subTxt = stderr + ":" + stdout
        notifyUtils.failedTips(failedString, subTxt);
      }
    });
  }

}

const operationUtils = OperationUtils.getInstance();
export default operationUtils;
