const db = require("../config/db");

class Scholarships {
  static getAllScholarships() {
    let sql = "SELECT * FROM beasiswa LIMIT 10;";

    return db.execute(sql);
  }

  static getScholarshipByNegaraTujuan(negara_tujuan) {
    let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${negara_tujuan}%' LIMIT 10;`;

    return db.execute(sql);
  }

  static getScholarshipByDegree(degree) {
    let sql = `SELECT * FROM beasiswa WHERE tingkat_pendidikan LIKE '%${degree}%' LIMIT 10;`;

    return db.execute(sql);
  }

  static getScholarshipByType(type) {
    let sql = `SELECT * FROM beasiswa WHERE tipe_beasiswa LIKE '%${type}%' LIMIT 10;`;

    return db.execute(sql);
  }

  static getScholarshipOrderBy(order_by) {
    let sql = `SELECT * FROM beasiswa ORDER BY ${order_by} DESC LIMIT 10;`;

    return db.execute(sql);
  }
}

module.exports = Scholarships;
