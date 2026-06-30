const db = require("../config/db");

exports.getStudents = async (req, res) => {
    const result = await db.query("SELECT * FROM students");
    res.json(result.rows);
};

exports.createStudent = async (req, res) => {
    const { name, email, course } = req.body;

    await db.query(
        "INSERT INTO students(name,email,course) VALUES($1,$2,$3)",
        [name, email, course]
    );

    res.send("Student Added");
};

exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, email, course } = req.body;

    await db.query(
        "UPDATE students SET name=$1,email=$2,course=$3 WHERE id=$4",
        [name, email, course, id]
    );

    res.send("Student Updated");
};

exports.deleteStudent = async (req, res) => {
    const { id } = req.params;

    await db.query(
        "DELETE FROM students WHERE id=$1",
        [id]
    );

    res.send("Student Deleted");
};