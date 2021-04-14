import RandomString from "./tools/moreTools/RandomString"
import FastKillProcess from "./tools/processTools/FastKillProcess"
import TimestampTools from "./tools/timeTools/TimestampTools"
import LanguageSetting from "./setting/LanguageSetting"

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
  },
  setting: {
    LanguageSetting: LanguageSetting,
  }
}
