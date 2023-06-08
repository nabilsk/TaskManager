const mongoose = require("mongoose");

const connectDb = async (databaseConnectionUrl) => {
  try {
    const connect = await mongoose.connect(databaseConnectionUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("connect to db !...");
  } catch (error) {
    console.log("from dbConnection: ", error);
    process.exit(1);
  }
};

module.exports = connectDb;
