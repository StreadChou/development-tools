let artisanLanguage = require("./ArtisanCommand/ArtisanLanguage");

class Artisan {
  static _instance;
  artisanList = {};

  constructor() {
    // this.registerArtisan(artisanLanguage) language artisan is not ready
  }

  static getInstance() {
    this._instance = this._instance || new Artisan();
    return this._instance;
  }

  registerArtisan(component) {
    this.artisanList[component.artisanCommand] = component;
  }

  runArtisan() {
    let argv = process.argv.slice();
    let command = argv[2];
    if (!this.artisanList.hasOwnProperty(command)) {
      return this.showHelp();
    }
    argv = argv.slice(2, argv.length);
    this.artisanList[command].runArtisan(argv);
  }

  showHelp() {
    console.log("Artisan Help \n");
    Object.values(this.artisanList).forEach(artisan => {
      artisan.getHelp();
    })
  }
}

Artisan.getInstance().runArtisan();
