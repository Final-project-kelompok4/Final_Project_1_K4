const express = require("express");
const app = express();
const port = 3000


// Middleware untuk mengizinkan pembacaan body JSON
app.use(express.json());


// Import dan gunakan rute otentikasi
const authRoutes = require("./routes/userRoutes");
app.use("/API/v1/users", authRoutes);


// Import dan gunakan rute Reflections
const reflectionsRoutes = require("./routes/reflectionRoutes");
app.use("/API/v1/reflections", reflectionsRoutes);



app.listen(port, () => {
    console.log("Server running on port : ", port)
})
