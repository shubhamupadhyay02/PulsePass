const express = require("express");
const { testAPI, register, login } = require("../controllers/authController");

const router = express.Router();

router.get("/test", testAPI);
router.post("/register", register);
router.post("/login", login);

module.exports = router;