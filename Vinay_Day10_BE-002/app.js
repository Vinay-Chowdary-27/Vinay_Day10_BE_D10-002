const express = require("express");

const studentRoutes = require("./routes/studentRoutes");
const productRoutes = require("./routes/productRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);
app.use("/products", productRoutes);
app.use("/attendance", attendanceRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});