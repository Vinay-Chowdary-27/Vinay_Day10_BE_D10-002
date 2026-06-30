const express = require("express");
const router = express.Router();

const attendance = require("../controllers/attendanceController");

router.get("/", attendance.getAttendance);
router.post("/", attendance.createAttendance);
router.put("/:id", attendance.updateAttendance);
router.delete("/:id", attendance.deleteAttendance);

module.exports = router;