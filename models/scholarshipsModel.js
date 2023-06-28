const db = require("../config/db");

class Scholarships {
  static getAllScholarships() {
    let sql = "SELECT * FROM beasiswa;";

    return db.execute(sql);
  }

  static getScholarshipByNegaraTujuan(negara_tujuan) {
    let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${negara_tujuan}%';`;

    return db.execute(sql);
  }
}

module.exports = Scholarships;
