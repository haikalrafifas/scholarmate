const db = require("../config/db");

class Rumpun {
  static getAllRumpun() {
    let sql = "SELECT * FROM rumpun";

    return db.execute(sql);
  }
}

module.exports = Rumpun;
