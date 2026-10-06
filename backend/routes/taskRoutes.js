const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create task",
            error: error.message
        });
    }
});

module.exports = router;