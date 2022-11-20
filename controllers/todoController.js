const TodoSchema = require("../models/Todo");

// get all todo
const getAllTodo = (req, res) => {
  TodoSchema.find().then((data) => {
    res.status(200).send(data);
  });
};

// add todo
const addTodo = (req, res) => {
  const { title, description } = req.body;
  let newTodo = new TodoSchema({
    title,
    description,
  });
  try {
    newTodo.save().then((data) => {
      res.send({
        message: "Saved to database successfully",
        data,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

// Edit Todo List
const editTodo = (req, res) => {
  const { id, title, description } = req.query;

  TodoSchema.findByIdAndUpdate(id, {
    title,
    description,
    timestamp: new Date().toLocaleDateString(),
  })
    .then((data) => {
      res.send({ message: "record updated successfully", data });
    })
    .catch((err) => res.send(err));
};

// delete todo
const deleteTodo = (req, res) => {
  const { id } = req.query;
  TodoSchema.findByIdAndDelete(id)
    .then((data) => res.send({ message: "record deleted successfully", data }))
    .catch((err) => res.send(err));
};

module.exports = {
  getAllTodo,
  addTodo,
  editTodo,
  deleteTodo,
};
