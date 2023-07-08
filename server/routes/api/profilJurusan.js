const express = require("express");
const router = express.Router();
const profilJurusanController = require("../../controllers/profilJurusanController");

router.route("/").get(profilJurusanController.getAllRumpun);
router.route("/rumpun-:nama_rumpun").get(profilJurusanController.getAllProdiByRumpunName);
// router.route("/:id_rumpun").get(profilJurusanController.getAllProdiByRumpunId);
// router
//   .route("/:id_rumpun/:id_prodi")
//   .get(profilJurusanController.getProdiDetail);
router
  .route("/tempat-kuliah-:nama_prodi")
  .get(profilJurusanController.getTempatKuliahProdi);
router
  .route("/prospek-:nama_prodi")
  .get(profilJurusanController.getProspekJurusan);
router
  .route("/:nama_prodi")
  .get(profilJurusanController.getProdiDetail);

module.exports = router;
