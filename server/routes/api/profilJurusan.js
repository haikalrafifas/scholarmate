const express = require("express");
const router = express.Router();
const profilJurusanController = require("../../controllers/profilJurusanController");

router.route("/").get(profilJurusanController.getAllRumpun);
router.route("/:id_rumpun").get(profilJurusanController.getAllProdiByRumpunId);
router
  .route("/:id_rumpun/:id_prodi")
  .get(profilJurusanController.getProdiDetail);
router
  .route("/:id_rumpun/:id_prodi/tempat-kuliah")
  .get(profilJurusanController.getTempatKuliahProdi);

module.exports = router;
