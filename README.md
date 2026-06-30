## Project Overview

This project demonstrates CRUD (Create, Read, Update, Delete) operations using **Node.js**, **Express.js**, and **PostgreSQL**.

The application manages:

* Students
* Products
* Attendance Records

The project uses PostgreSQL as the database and Express.js as the backend framework.

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* pg (PostgreSQL Driver)
* Nodemon

---

## Project Structure

```text
BE-D10-002_Vinay
│
├── config
│   └── db.js
│
├── controllers
│   ├── studentController.js
│   ├── productController.js
│   └── attendanceController.js
│
├── routes
│   ├── studentRoutes.js
│   ├── productRoutes.js
│   └── attendanceRoutes.js
│
├── app.js
├── package.json
└── Query Documentation.txt
```

---

## Database Configuration

Database Connection:

```javascript
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "vinay10",
    password: "1234",
    port: 5432
});
```

---

## Database Tables

### Students Table

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    course VARCHAR(100)
);
```

### Products Table

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    price NUMERIC(10,2),
    quantity INT
);
```

### Attendance Table

```sql
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    status VARCHAR(20),
    attendance_date DATE
);
```

---

## API Endpoints

### Student APIs

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /students     | Get all students |
| POST   | /students     | Add student      |
| PUT    | /students/:id | Update student   |
| DELETE | /students/:id | Delete student   |

### Product APIs

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /products     | Get all products |
| POST   | /products     | Add product      |
| PUT    | /products/:id | Update product   |
| DELETE | /products/:id | Delete product   |

### Attendance APIs

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | /attendance     | Get all attendance records |
| POST   | /attendance     | Add attendance             |
| PUT    | /attendance/:id | Update attendance          |
| DELETE | /attendance/:id | Delete attendance          |

---

## Sample Request Bodies

### Create Student

```json
{
  "name": "Vinay",
  "email": "vinay@gmail.com",
  "course": "NodeJS"
}
```

### Create Product

```json
{
  "product_name": "Laptop",
  "price": 50000,
  "quantity": 5
}
```

### Create Attendance

```json
{
  "student_name": "Vinay",
  "status": "Present",
  "attendance_date": "2026-06-30"
}
```

---

## Query Documentation

### Student Queries

```sql
INSERT INTO students(name,email,course) VALUES($1,$2,$3);

SELECT * FROM students;

UPDATE students
SET name=$1,email=$2,course=$3
WHERE id=$4;

DELETE FROM students
WHERE id=$1;
```

### Product Queries

```sql
INSERT INTO products(product_name,price,quantity)
VALUES($1,$2,$3);

SELECT * FROM products;

UPDATE products
SET product_name=$1,price=$2,quantity=$3
WHERE id=$4;

DELETE FROM products
WHERE id=$1;
```

### Attendance Queries

```sql
INSERT INTO attendance(student_name,status,attendance_date)
VALUES($1,$2,$3);

SELECT * FROM attendance;

UPDATE attendance
SET student_name=$1,status=$2,attendance_date=$3
WHERE id=$4;

DELETE FROM attendance
WHERE id=$1;
```

---

## Installation Steps

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure PostgreSQL

Create database:

```sql
CREATE DATABASE vinay10;
```

Create required tables.

### 4. Start Server

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## Server Information

```text
Port: 3000
Database: PostgreSQL
Database Name: vinay10
```

---

## Expected Output

When the server starts successfully:

```bash
Server Running on Port 3000
```
