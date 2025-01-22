const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { email, firstName, lastName, role } = req.body;

  if (!email || !role) {
    return res.status(400).json({ message: "Email and role are required." });
  }

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).json({ message: "User with this email already exists." });
  }

  await User.create({
    email,
    firstName,
    lastName,
    role
  });

  res.status(201).json({
    message: "User successfully created.",
  });
});

module.exports = router;
