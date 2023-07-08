const Sequilize = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequilize;

const Beasiswa = db.define("beasiswa", {
    beasiswa_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING
    },
    nama_beasiswa: {
      type: DataTypes.STRING,
    },
    pemberi_beasiswa: {
      type: DataTypes.STRING,
    },
    negara_tujuan: {
      type: DataTypes.STRING,
    },
    tipe_beasiswa: {
      type: DataTypes.STRING,
    },
    tingkat_pendidikan: {
      type: DataTypes.STRING,
    },
    tanggal_mulai_daftar: {
      type: DataTypes.DATE,
    },
    tanggal_akhir_daftar: {
      type: DataTypes.DATE,
    },
    persyaratan: {
      type: DataTypes.STRING(512),
    },
    keuntungan: {
      type: DataTypes.TEXT,
    },
    link_pendaftaran: {
      type: DataTypes.STRING(512),
    },
    jumlah_pencarian: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

// class Scholarships {
//   static getAllScholarships() {
//     let sql = "SELECT * FROM beasiswa LIMIT 10;";

//     return db.execute(sql);
//   }

//   static getScholarshipByCountry(country) {
//     let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${country}%' LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByCountryAndType(country, type) {
//     let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${country}' AND tipe_beasiswa LIKE '%${type}%' LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByCountryAndOrderBy(country, order_by) {
//     let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${country}%' ORDER BY '${order_by}' DESC LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByDegree(degree) {
//     let sql = `SELECT * FROM beasiswa WHERE tingkat_pendidikan LIKE '%${degree}%' LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByDegreeAndCountry(degree, country) {
//     let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${country}%' AND tingkat_pendidikan LIKE '%${degree}%';`;

//     return db.execute(sql);
//   }

//   static getScholarshipByDegreeAndType(degree, type) {
//     let sql = `SELECT * FROM beasiswa WHERE tingkat_pendidikan LIKE '%${degree}' AND tipe_beasiswa LIKE '%${type}%' LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByDegreeAndOrderBy(degree, order_by) {
//     let sql = `SELECT * FROM beasiswa WHERE tingkat_pendidikan LIKE '%${degree}' ORDER BY ${order_by} DESC LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByType(type) {
//     let sql = `SELECT * FROM beasiswa WHERE tipe_beasiswa LIKE '%${type}%' LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByTypeAndOrderBy(type, order_by) {
//     let sql = `SELECT * FROM beasiswa WHERE tipe_beasiswa LIKE '%${type}%' ORDER BY ${order_by} DESC LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipByDegreeAndCountryAndTypeAndOrderBy(
//     degree,
//     country,
//     type,
//     order_by
//   ) {
//     let sql = `SELECT * FROM beasiswa WHERE negara_tujuan LIKE '%${country}%' AND tingkat_pendidikan LIKE '%${degree}%' AND tipe_beasiswa LIKE '%${type}%' ORDER BY ${order_by} DESC LIMIT 10;`;

//     return db.execute(sql);
//   }

//   static getScholarshipOrderBy(order_by) {
//     let sql = `SELECT * FROM beasiswa ORDER BY ${order_by} DESC LIMIT 10;`;

//     return db.execute(sql);
//   }
// }

module.exports = Beasiswa;
