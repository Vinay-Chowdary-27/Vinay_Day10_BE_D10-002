CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    status VARCHAR(20),
    attendance_date DATE
);