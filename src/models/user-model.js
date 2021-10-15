const mongoose = require("mongoose");

const openSchema = new mongoose.Schema(
  {
    firstName: { type: "string" },
    middleName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string", unique: true },
    password: { type: "string" },
    listFilm: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "film",
      },
    ],
  },
  {
    strict: false,
    versionKey: false,
    bufferCommands: false,
    validateBeforeSave: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", openSchema, "user");
