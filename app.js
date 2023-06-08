const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./src/config/dbConnection");

//middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", require("./src/routes/taskRoutes"));

const port = 3000;

const start = async () => {
  try {
    await connectDb(process.env.CONNECTION_STRING);
    app.listen(port, console.log(`Srever is listining on port ${port} !..`));
  } catch (error) {
    console.log("from app.js: ", error);
  }
};

start();
