const express = require("express");
const router = express.Router();
const RumpunController = require("../../controllers/rumpunController");
const ProdiController = require("../../controllers/prodiController");

router.route("/").get(RumpunController.getAllRumpun);
router.route("/:id_rumpun").get(ProdiController.getAllProdiByRumpunId);
router.route("/:id_rumpun/:id_prodi").get(ProdiController.getProdiDetail);

// untuk menampilkan data tempat kuliah maka panggil funciton getTempatKuliahProdi yang berada di ProdiController.

module.exports = router;
