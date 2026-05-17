const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {

  try {

    const { studentId } = req.body;

    const attendance = await Attendance.create({
      studentId,
    });

    res.status(201).json({
      success: true,
      attendance,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

};