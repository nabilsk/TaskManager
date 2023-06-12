const TaskDb = require("../models/TaskModel");

const getAlltasks = async (req, res) => {
  try {
    const allTasks = await TaskDb.find({});
    res.status(200).json({
      msg: "getting all the data",
      data: allTasks,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTasks = async (req, res) => {
  const { name, completed } = req.body;
  try {
    const createtask = await TaskDb.create({
      name,
      completed,
    });

    res.status(201).json({
      msg: "Succefully creted",
      data: createtask,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskDb.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task found with id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskDb.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task found with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskDb.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task found with id: ${taskID}` });
    }

    res.status(200).json({ msg: "succeess" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAlltasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
