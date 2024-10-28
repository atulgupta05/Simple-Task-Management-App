const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.sqlite");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT, priority TEXT, completed INTEGER)"
  );
});

const getTasks = (callback) => {
  db.all("SELECT * FROM tasks", (err, rows) => callback(err, rows));
};

const addTask = (title, priority, callback) => {
  db.run(
    "INSERT INTO tasks (title, priority, completed) VALUES (?, ?, 0)",
    [title, priority],
    (err) => callback(err)
  );
};

const updateTask = (id, completed, callback) => {
  db.run(
    "UPDATE tasks SET completed = ? WHERE id = ?",
    [completed, id],
    (err) => callback(err)
  );
};

const deleteTask = (id, callback) => {
  db.run("DELETE FROM tasks WHERE id = ?", [id], (err) => callback(err));
};

module.exports = { getTasks, addTask, updateTask, deleteTask };