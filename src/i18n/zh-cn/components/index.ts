import RandomString from "./tools/moreTools/RandomString"
import FastKillProcess from "./tools/processTools/FastKillProcess"
import TimestampTools from "./tools/timeTools/TimestampTools"
import LanguageSetting from "./setting/LanguageSetting"
import Md5Encrypt from "./tools/encryptDecryptTools/Md5Encrypt";

export default {
  tools: {
    moreTools: {
      RandomString: RandomString,
    },
    processTools: {
      FastKillProcess: FastKillProcess,
    },
    timeTools: {
      TimestampTools: TimestampTools,
    },
    encryptDecryptTools: {
      Md5Encrypt: Md5Encrypt,
    }
  },
  setting: {
    LanguageSetting: LanguageSetting,
  }
}
