const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const authenticateToken = require("./authMiddleware");

router.get('/', authenticateToken, async (req, res) => {
  const { role } = req.query; 

  try {
    let users;

    if (role) {
      users = await User.findAll({
        where: {
          role: role, 
        },
      });
    } else {
      users = await User.findAll();
    }

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found.' });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error retrieving users.',
      error: error.message,
    });
  }
});

module.exports = router;
