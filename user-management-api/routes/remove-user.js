
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  user.destroy();

  res.status(200).json({
    message: "User successfully remove.",
  });
});

module.exports = router;
