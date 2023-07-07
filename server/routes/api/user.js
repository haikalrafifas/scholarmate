const express = require("express");
const router = express.Router();
const verifyToken = require("../../middleware/VerifyToken");
const refreshToken = require("../../controllers/refreshToken");
const {
  getUsers,
  registerUser,
  loginUser,
  logoutUser,
} = require("../../controllers/usersController");

const cekParam = (req, res, next) => {
  res.json(req.body.email);
};

router.get("/", verifyToken, getUsers);
router.post("/", registerUser);
router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.get("/token", refreshToken);

module.exports = router;
