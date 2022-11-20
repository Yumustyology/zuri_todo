const express = require("express");

const router = express.Router();
const {
  getAllTodo,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getAllTodo);
router.post("/addTodo", addTodo);
router.put("/editTodo", editTodo);
router.delete("/deleteTodo", deleteTodo);

module.exports = router;
