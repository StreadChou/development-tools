import zhCnTimestampTools from "src/i18n/zh-cn/component/timeTools/timestampTools";
import enUsTimestampTools from "src/i18n/en-us/component/timeTools/timestampTools";

let ComponentMap = {
  TimestampTools: {
    component: "TimestampTools",
    keywords: {
      "zh-cn": zhCnTimestampTools.keywords,
      "en-us": enUsTimestampTools.keywords,
    },
  }
}



export default ComponentMap;
