const express = require("express");
const router = express.Router();
const scholarshipsController = require("../../controllers/scholarshipsController");

router.route("/").get(scholarshipsController.getScholarshipsInfo);
router.route("/all").get(scholarshipsController.getAllScholarships);
router.route("/:slug").get(scholarshipsController.getScholarshipDetail);

module.exports = router;
