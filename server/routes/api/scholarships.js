const express = require("express");
const router = express.Router();
const scholarshipsController = require("../../controllers/scholarshipsController");

router.route("/").get(scholarshipsController.getAllScholarships);

router.route("/:degree").get(scholarshipsController.getScholarshipByDegree);

router
  .route("/:negara_tujuan")
  .get(scholarshipsController.getScholarshipByNegaraTujuan);

router.route("/:type").get(scholarshipsController.getScholarshipByType);

module.exports = router;
