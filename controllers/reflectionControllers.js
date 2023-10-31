const pool = require("../config/db");

// Fungsi untuk membuat Reflection
async function createReflection(req, res) {
  const { success, low_point, take_away } = req.body;
  const { userId } = req;

  try {
    const insertReflectionQuery = "INSERT INTO Reflections (success, low_point, take_away, UserId) VALUES ($1, $2, $3, $4) RETURNING *";
    const insertReflectionValues = [success, low_point, take_away, userId];

    const result = await pool.query(insertReflectionQuery, insertReflectionValues);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Gagal membuat Reflection" });
  }
}

// Fungsi untuk membaca Reflection pengguna
async function getReflection(req, res) {

    const { userId } = req;

    const query = "SELECT * FROM Reflections WHERE UserId = $1";
    const values = [userId];

    try {
        const result = await pool.query(query, values);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Gagal membaca Reflections" });
    }
}

// Fungsi untuk memperbarui Reflection
async function updateReflection(req, res) {
  const reflectionId = req.params.id;
  const { success, low_point, take_away } = req.body;

  try {
    const updateReflectionQuery = "UPDATE Reflections SET success = $1, low_point = $2, take_away = $3 WHERE id = $4 RETURNING *";
    const updateReflectionValues = [success, low_point, take_away, reflectionId];

    const result = await pool.query(updateReflectionQuery, updateReflectionValues);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Reflection tidak ditemukan" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Gagal memperbarui Reflection" });
  }
}

// Fungsi untuk menghapus Reflection
async function deleteReflection(req, res) {
  const reflectionId = req.params.id;
  const {userId} = req; // Mengambil ID pengguna dari token JWT

  try {
    const deleteReflectionQuery = "DELETE FROM Reflections WHERE id = $1 AND UserId = $2";
    const deleteReflectionValues = [reflectionId, userId];

    const result = await pool.query(deleteReflectionQuery, deleteReflectionValues);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Reflection tidak ditemukan" });
    }

    res.status(200).json({ message: "Reflection berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ error: "Gagal menghapus Reflection" });
  }
}

module.exports = {
  createReflection,
  getReflection,
  updateReflection,
  deleteReflection,
};
