import {boot} from "quasar/wrappers";
import {LanguageConst} from "src/i18n/LanguageConst";
import {i18n} from "boot/i18n";

const toolsI18nPrefix = "components.tools.";

export interface ToolsMapInterface {
  component: string,
  path: string,
  keywords: { [language: string]: any }
}

class ToolsMap {
  private static _instance: ToolsMap;

  private languageList: string[] = [];

  private map: { [componentName: string]: ToolsMapInterface } = {}

  public static getInstance(): ToolsMap {
    this._instance = this._instance || new ToolsMap()
    return this._instance;
  }

  private constructor() {
    this.registerLanguage();
    this.registerTool("moreTools.RandomString");
    this.registerTool("processTools.FastKillProcess");
    this.registerTool("timeTools.TimestampTools");
  }

  private registerLanguage() {
    LanguageConst.forEach(ele => {
      if (!this.languageList.includes(ele.value)) {
        this.languageList.push(ele.value);
      }
    })
  }

  private registerTool(path: string) {
    let pathArr = path.split(".");
    let toolMap: ToolsMapInterface = {
      component: "",
      path: "",
      keywords: {}
    }
    toolMap.component = pathArr[pathArr.length - 1]
    toolMap.path = path
    this.languageList.forEach(ele => {
      toolMap.keywords[ele] = [];
      if (i18n.te(toolsI18nPrefix + path + ".keywords", ele)) {
        toolMap.keywords[ele] = i18n.t(toolsI18nPrefix + path + ".keywords", ele);
      }
    })
    this.map[toolMap.component] = toolMap;
  }

  public searchKeywords(searchKeyword: string): string[] {
    let response: string[] = [];
    Object.values(this.map).forEach(ele => {
      let locale = i18n.locale;
      let defaultLocale = "en-us";

      let result = ele.keywords[locale].some((keywordsEle: string) => {
        return keywordsEle.indexOf(searchKeyword) != -1
      })

      if (!result && locale !== defaultLocale) {
        result = ele.keywords[defaultLocale].some((keywordsEle: string) => {
          return keywordsEle.indexOf(searchKeyword) !== -1
        })
      }
      if (result) {
        response.push(ele.component);
      }
    })
    return response;
  }
}

export const toolsMap = ToolsMap.getInstance();


declare module 'vue/types/vue' {
  interface Vue {
    $toolsMap: ToolsMap;
  }
}

export default boot(({Vue}) => {
  Vue.prototype.$toolsMap = toolsMap;
});

