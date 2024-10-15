const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/usersRoutes");
const carsRoutes = require("./routes/carsRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/cars', carsRoutes);

module.exports = app;