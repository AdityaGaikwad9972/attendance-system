const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

/* AUTH ROUTES */

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

/* ATTENDANCE ROUTES */

app.use(
  "/api/attendance",
  require("./routes/attendanceRoutes")
);

/* HOME ROUTE */

app.get("/", (req, res) => {

  res.send("Attendance API Running");

});

module.exports = app;