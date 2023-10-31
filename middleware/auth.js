const jwt = require("jsonwebtoken");
const secretKey = "rahasia_anda";

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Token tidak ditemukan" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token tidak valid" });
    }

    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyToken;
