const express = require("express");
const router = express.Router();
const scholarshipsController = require("../../controllers/scholarshipsController");

const getParamInfo = (req, res, next) => {
  res.send(req.query);
};

router.route("/").get(scholarshipsController.getScholarshipsInfo);

module.exports = router;
