const fs = require("fs");

class File {
  constructor(path) {
    this.path = path;

    try {
      this.content = fs.readFileSync(path, "utf8");
    } catch (err) {
      console.error(err);
    }

    this.lines = this.content.split("\n");
  }

  getLine() {
    return this.lines.shift();
  }
}

module.exports = File;
