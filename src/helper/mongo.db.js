const mongoose = require("mongoose");
const { logErrDetails, logInfoDetails } = require("./log");

const opts = {
  native_parser: true,
  poolSize: 5,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const uri = "mongodb://localhost:27017/film_api";

async function dbService() {
  try {
    await mongoose.connect(uri, opts);
    logInfoDetails({ message: "Mongodb Connected" });
  } catch (error) {
    logErrDetails({ error, message: "Mongo DB not connected" });
  }
}

module.exports = { dbService };
