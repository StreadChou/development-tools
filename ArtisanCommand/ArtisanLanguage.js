let ArtisanBase = require("./ArtisanBase");
let fs = require("fs");
let path = require("path")

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
    console.log("  create \<language name\> \<language label\> \t", "for example [ language create en_Us English ] to add language");
    console.log("  destroy \<language name\> \t\t\t", "for example [ language destroy en_Us ] to destroy language");
  }

  create(argv) {
    let projectPath = this.getProjectRootPath();
    const languagePath = path.join(projectPath, "src/i18n")

    const defaultLanguage = "en-us";
    try {
      fs.accessSync(languagePath, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
      console.error(languagePath, 'does not exist or permission denied');
    }
    let copyFrom = path.join(languagePath, defaultLanguage);
    try {
      fs.accessSync(copyFrom, fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
      console.error(copyFrom, 'does not exist or permission denied');
    }
    let copyTo = path.join(languagePath, argv[2]);
    try {
      fs.accessSync(copyTo, fs.constants.F_OK);
      console.error(copyTo, 'exist');
    } catch (e) {
    }
    this.copyDir(copyFrom, copyTo)

    const languageConstPath = path.join(languagePath, "LanguageConst.ts")
    let languageConst = fs.readFileSync(languageConstPath, 'utf8')
    let constReplaceFrom = "  // please add language by artisan";
    let constReplaceTo = `  // please add language by artisan
  {value: '${argv[2]}', label: '${argv[3]}'},`;
    fs.writeFileSync(languageConstPath, languageConst.replace(constReplaceFrom, constReplaceTo))


    let language = argv[2];
    let languageArr = language.split("-")
    languageArr[1] = this.firstToUpper1(languageArr[1]);
    let languageClass = languageArr.join("");

    const languageIndexPath = path.join(languagePath, "index.ts")
    let languageIndex = fs.readFileSync(languageIndexPath, 'utf8')
    let importReplaceFrom = "// please add language import by artisan";
    let importReplaceTo = `// please add language import by artisan
import ${languageClass} from './${argv[2]}';`;
    let final = languageIndex.replace(importReplaceFrom, importReplaceTo);

    let indexReplaceFrom = "  // please add language const by artisan";
    let indexReplaceTo = `  // please add language const by artisan
  '${argv[2]}': ${languageClass},`;
    final = final.replace(indexReplaceFrom, indexReplaceTo);

    fs.writeFileSync(languageIndexPath, final)

  }

  destroy(argv) {

  }
}

const artisanLanguage = new ArtisanLanguage();
module.exports = artisanLanguage
