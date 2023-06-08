const TaskDb = require("../models/TaskModel");

const getAlltasks = async (req, res) => {
  const allTasks = await TaskDb.find();
  res.status(200).json({
    msg: "getting all the data",
    data: allTasks,
  });
};
const createTasks = async (req, res) => {
  const { name, completed } = req.body;
  //   if (!name || !completed) {
  //     return res.status(400).json({
  //       msg: "No data found",
  //     });
  //   }
  const createtask = await TaskDb.create({
    name,
    completed,
  });

  res.status(201).json({
    msg: "Succefully creted",
    data: createtask,
  });
};

const getTask = async (req, res) => {
  res.send("task data");
};
const updateTask = async (req, res) => {
  res.send("task updated ");
};
const deleteTask = async (req, res) => {
  res.send("task deleted");
};

module.exports = {
  getAlltasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
