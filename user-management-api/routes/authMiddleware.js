const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ error: "No token, authorization required" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "The token has expired" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(403).json({ error: "Invalid token" });
      } else {
        return res.status(500).json({ error: "Error verifying token" });
      }
    }

    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;
