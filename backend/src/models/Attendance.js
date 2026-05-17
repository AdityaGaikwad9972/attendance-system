const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  date: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    default: "Present",
  },

});

module.exports = mongoose.model(
  "Attendance",
  attendanceSchema
);