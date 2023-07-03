const express = require("express");
const router = express.Router();
const scholarshipsController = require("../../controllers/scholarshipsController");

router.route("/").get(scholarshipsController.getScholarshipsInfo);

module.exports = router;
