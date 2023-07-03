const db = require("../config/db");

class Scholarships {
  static getAllScholarships() {
    let sql = "SELECT * FROM beasiswa LIMIT 10;";

    return db.execute(sql);
  }

  static getScholarshipByNegaraTujuan(negara_tujuan) {
    let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${negara_tujuan}%';`;

    return db.execute(sql);
  }

  static getScholarshipByDegree(degree) {
    let sql = `SELECT * FROM beasiswa WHERE tingkat_pendidikan LIKE '%${degree}%';`;

    return db.execute(sql);
  }

  static getScholarshipByType(type) {
    let sql = `SELECT * FROM beasiswa WHERE tipe_beasiswa LIKE '%${type}%';`;

    return db.execute(sql);
  }

  static getScholarshipByNegaraTujuanAndOrderByPopularity(
    negara_tujuan,
    order_by
  ) {
    let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${negara_tujuan}%' ORDER BY '%${order_by}%' DESC;`;

    return db.execute(sql);
  }
}

module.exports = Scholarships;
