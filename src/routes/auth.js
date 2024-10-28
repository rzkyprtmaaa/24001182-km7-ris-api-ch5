const express = require("express");
const {
  validateRegister,
  validateLogin,
  authorization,
} = require("../middleware/auth");
const { register, login, getProfile } = require("../controllers/auth");

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/profile", authorization(1, 2), getProfile);

module.exports = router;
