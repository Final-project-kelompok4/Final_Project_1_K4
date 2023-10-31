const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const secretKey = "rahasia_anda";

// Endpoint untuk registrasi pengguna
async function registerUser(req, res) {
  const { email, password } = req.body;

  try {
    const checkUserQuery = "SELECT * FROM Users WHERE email = $1";
    const checkUserValues = [email];
    const userExistResult = await pool.query(checkUserQuery, checkUserValues);

    if (userExistResult.rows.length > 0) {
        return res.status(401).json({ error: "Email sudah terdaftar" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUserQuery = "INSERT INTO Users (email, password) VALUES ($1, $2) RETURNING id";
    const insertUserValues = [email, hashedPassword];

    const result = await pool.query(insertUserQuery, insertUserValues);

    const userId = result.rows[0].id;

    res.status(201).json({ userId, email });
    } catch (err) {
        res.status(500).json({ error: "Gagal mendaftarkan pengguna" });
    }
}

// Endpoint untuk login pengguna
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const query = "SELECT * FROM Users WHERE email = $1";
    const values = [email];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Email tidak valid" });
    }

    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Kata sandi tidak valid" });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: "Gagal masuk" });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
