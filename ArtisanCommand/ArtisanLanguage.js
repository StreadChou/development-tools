let ArtisanBase = require("./ArtisanBase");
let fs = require("fs");
let path = require("path")

const defaultLanguage = "en-us";

class ArtisanLanguage extends ArtisanBase {
  static _instance;
  artisanCommand = "language";

  static getInstance() {
    this._instance = this._instance || new ArtisanLanguage();
    return this._instance;
  }

  runArtisan(argv) {
    if (argv[1] === "create") {
      return this.create(argv);
    } else if (argv[1] === "destroy") {
      return this.destroy(argv);
    } else {
      return this.getHelp()
    }
  }

  getHelp() {
    console.log(`${this.artisanCommand} Help`);
    console.log("  create \<language name\> [copy from] \t", "for example [ language create en-us zh-cn ] to Create language");
    console.log("  destroy \<language name\> \t\t", "for example [ language destroy en-us ] to destroy language");
  }

  create(argv) {
    let projectPath = this.getProjectRootPath();
    const languagePath = path.join(projectPath, "src/i18n")
    const copyLanguage = argv[3] ? argv[3] : defaultLanguage;

    // check if src/i18n R_OK and W_OK
    try {
      fs.accessSync(languagePath, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
      console.error(languagePath, 'does not exist or permission denied');
    }

    // check if copy can read
    let copyFrom = path.join(languagePath, copyLanguage);
    try {
      fs.accessSync(copyFrom, fs.constants.R_OK);
    } catch (err) {
      console.error(copyFrom, 'does not exist or permission denied');
    }

    // check if target language exist
    let copyTo = path.join(languagePath, argv[2]);
    try {
      fs.accessSync(copyTo, fs.constants.F_OK);
      console.error(copyTo, 'exist');
    } catch (e) {
    }

    // copy dir
    this.copyDir(copyFrom, copyTo)
    console.log("Create Language Success ");
    console.log("After Create Language You Must: ");
    console.log("\t 1. import new language to src/i18n/index.ts");
    console.log("\t 2. Create const to src/i18n/LanguageConst.ts");
  }

  destroy(argv) {
    let projectPath = this.getProjectRootPath();
    let languagePath = path.join(projectPath, "src/i18n");
    let targetLanguage = argv[2];
    languagePath = path.join(languagePath, targetLanguage);
    try {
      fs.accessSync(languagePath, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
      console.error(languagePath, 'does not exist or permission denied');
    }
    fs.rmdirSync(languagePath, {recursive: true})

    console.log("Destroy Language Success ");
    console.log("After Destroy Language You Must: ");
    console.log("\t 1. destroy language from src/i18n/index.ts");
    console.log("\t 2. destroy const from src/i18n/LanguageConst.ts");
  }
}

const artisanLanguage = new ArtisanLanguage();
module.exports = artisanLanguage
