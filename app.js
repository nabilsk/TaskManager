const express = require("express");
const app = express();
require("dotenv").config();

const connectDb = require("./src/config/dbConnection");
const notFound = require("./src/middleare/not-found");
const errorHandlerMiddleware = require("./src/middleare/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", require("./src/routes/taskRoutes"));
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.Port || 5000;

const start = async () => {
  try {
    await connectDb(process.env.CONNECTION_STRING);
    app.listen(port, console.log(`Srever is listining on port ${port} !..`));
  } catch (error) {
    console.log("from app.js: ", error);
  }
};

start();
