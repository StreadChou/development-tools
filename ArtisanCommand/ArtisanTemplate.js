let ArtisanBase = require("./ArtisanBase");

class ArtisanTemplate extends ArtisanBase {
  static _instance;
  artisanCommand = "template";

  static getInstance() {
    this._instance = this._instance || new ArtisanTemplate();
    return this._instance;
  }

  runArtisan(argv) {

  }

  getHelp() {
    console.log(`${this.artisanCommand} Help`);
  }
}

const artisanTemplate = new ArtisanTemplate();
module.exports = artisanTemplate
