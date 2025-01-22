const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.get("/auth", (req, res) => {
  const token = jwt.sign({}, JWT_SECRET, { expiresIn: "1h" });
  console.log(token);
  res.status(200).json({ token });
});

module.exports = router;
