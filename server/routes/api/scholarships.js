const express = require("express");
const router = express.Router();
const scholarshipsController = require("../../controllers/scholarshipsController");

router.route("/").get(scholarshipsController.getAllScholarships);
router
  .route("/:negara_tujuan")
  .get(scholarshipsController.getScholarshipByNegaraTujuan);

module.exports = router;
