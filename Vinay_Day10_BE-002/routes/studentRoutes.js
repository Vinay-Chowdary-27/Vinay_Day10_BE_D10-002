const express = require("express");
const router = express.Router();

const student = require("../controllers/studentController");

router.get("/", student.getStudents);
router.post("/", student.createStudent);
router.put("/:id", student.updateStudent);
router.delete("/:id", student.deleteStudent);

module.exports = router;