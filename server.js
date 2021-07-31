// import mysql2 package
const mysql = require('mysql2');

// import express
const express = require('express');

// port designation
const PORT = process.env.PORT || 3001;

// app expression
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // password
        password: 'mysqlpassword1$',
        database: 'company'
    },
    console.log('connected to the company database.')
);

// query the server
db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(rows);
});
// testing server
// app.get('/', (req, res) => {
//     res.json({
//         message: 'hello world'
//     });
// });

// default response for requests
app.use((req, res) => {
    res.status(404).end();
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});