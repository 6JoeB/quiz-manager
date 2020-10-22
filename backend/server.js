const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password
})

app.listen(PORT, () => {
    console.log('App running on port %s', PORT);
});