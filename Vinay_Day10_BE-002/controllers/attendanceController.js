const db = require("../config/db");

exports.getAttendance = async (req, res) => {
    const result = await db.query("SELECT * FROM attendance");
    res.json(result.rows);
};

exports.createAttendance = async (req, res) => {
    const { student_name, status, attendance_date } = req.body;

    await db.query(
        "INSERT INTO attendance(student_name,status,attendance_date) VALUES($1,$2,$3)",
        [student_name, status, attendance_date]
    );

    res.send("Attendance Added");
};

exports.updateAttendance = async (req, res) => {
    const { id } = req.params;
    const { student_name, status, attendance_date } = req.body;

    await db.query(
        "UPDATE attendance SET student_name=$1,status=$2,attendance_date=$3 WHERE id=$4",
        [student_name, status, attendance_date, id]
    );

    res.send("Attendance Updated");
};

exports.deleteAttendance = async (req, res) => {
    const { id } = req.params;

    await db.query(
        "DELETE FROM attendance WHERE id=$1",
        [id]
    );

    res.send("Attendance Deleted");
};