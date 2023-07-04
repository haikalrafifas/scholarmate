const db = require("../config/db");

class Prodi {
  static getAllProdiByRumpunId(id_rumpun) {
    let sql = `SELECT program_studi.nama_prodi, rumpun.nama_rumpun
FROM program_studi
JOIN rumpun_prodi ON program_studi.prodi_id = rumpun_prodi.prodi_id
JOIN rumpun ON rumpun_prodi.rumpun_id = rumpun.rumpun_id
WHERE rumpun_prodi.rumpun_id = '${id_rumpun}';
`;
    return db.execute(sql);
  }

  static getProdiDetail(id_prodi) {
    let sql = `SELECT * FROM program_studi WHERE prodi_id = '${id_prodi}';`;

    return db.execute(sql);
  }

  static getTempatKuliahProdi(id_prodi) {
    let sql = `SELECT universitas.nama_universitas, program_studi.nama_prodi
FROM universitas
JOIN tempat_kuliah ON universitas.universitas_id = tempat_kuliah.universitas_id
JOIN program_studi ON tempat_kuliah.prodi_id = program_studi.prodi_id
WHERE tempat_kuliah.prodi_id = '${id_prodi}';
`;

    return db.execute(sql);
  }
}

module.exports = Prodi;
