let path = require("path")
let fs = require("fs");

class ArtisanBase {
  projectRootPath = "";

  constructor() {
    this.projectRootPath = path.join(__filename, "../../");
  }

  runArtisan(argv) {
  }

  getHelp() {
  }

  getProjectRootPath() {
    return this.projectRootPath
  }

  copyDir(src, dist) {
    fs.access(dist, function (err) {
      if (err) {
        fs.mkdirSync(dist);
      }
      _copy(null, src, dist);
    });
    let _copy = (err, src, dist) => {
      if (err) throw err;
      fs.readdir(src, (err, paths) => {
        if (err) throw err;
        paths.forEach((path) => {
          let _src = src + '/' + path;
          let _dist = dist + '/' + path;
          fs.stat(_src, (err, stat) => {
            if (err) throw err;
            if (stat.isFile()) {
              fs.writeFileSync(_dist, fs.readFileSync(_src));
            } else if (stat.isDirectory()) {
              this.copyDir(_src, _dist)
            }
          })
        })
      })
    }
  }

  firstToUpper(str) {
    return str.trim().replace(str[0], str[0].toUpperCase());
  }

  onlyFirstToUpper(str) {
    return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
  }

}

module.exports = ArtisanBase
