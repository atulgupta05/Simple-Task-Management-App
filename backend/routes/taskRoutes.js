const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

router.get("/", (req, res) => {
  Task.getTasks((err, tasks) => (err ? res.status(500).send(err) : res.json(tasks)));
});

router.post("/", (req, res) => {
  const { title, priority } = req.body;
  Task.addTask(title, priority, (err) => (err ? res.status(500).send(err) : res.sendStatus(201)));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  Task.updateTask(id, completed, (err) => (err ? res.status(500).send(err) : res.sendStatus(200)));
});

router.delete("/:id", (req, res) => {
  Task.deleteTask(req.params.id, (err) => (err ? res.status(500).send(err) : res.sendStatus(200)));
});

module.exports = router;