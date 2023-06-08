const express = require("express");
const {
  getAlltasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/").get(getAlltasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
