const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authenticateToken = require("./authMiddleware");

router.patch('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, role } = req.body;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (role) user.role = role;

  await user.save();

  res.status(200).json({
    message: "User successfully updated.",
  });
});

module.exports = router;
