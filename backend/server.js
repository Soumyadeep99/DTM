require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Daily Task Manager API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});