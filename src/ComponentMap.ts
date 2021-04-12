let ComponentMap: {
  [componentName: string]: {
    component: string,
    keywords: { [language: string]: any }
  }
} = {}

function fastInject(component: string, path: string) {
  let zhCn = require("src/i18n/zh-cn/component/" + path).default;
  let enUs = require("src/i18n/en-us/component/" + path).default;
  ComponentMap[component] = {
    component: component,
    keywords: {
      "zh-cn": zhCn.keywords,
      "en-us": enUs.keywords,
    }
  }
}

fastInject("TimestampTools", "timeTools/timestampTools");
fastInject("FastKillProcess", "processTools/fastKillProcess");

export default ComponentMap;
