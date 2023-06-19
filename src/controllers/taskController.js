const TaskDb = require("../models/TaskModel");
const asyncWrapper = require("../middleare/async");

const getAlltasks = asyncWrapper(async (req, res) => {
  const tasks = await TaskDb.find({});
  res.status(200).json({ tasks });
});

const createTasks = asyncWrapper(async (req, res) => {
  const { name, completed } = req.body;
  const createtask = await TaskDb.create({
    name,
    completed,
  });

  res.status(201).json({
    createtask,
  });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await TaskDb.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task found with id: ${taskID}` });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await TaskDb.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task found with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await TaskDb.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task found with id: ${taskID}` });
  }

  res.status(200).json({ msg: "succeess" });
});

module.exports = {
  getAlltasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
