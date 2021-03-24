const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2018btecs00033",
});
connection.connect((err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  connection.query("CREATE DATABASE AWAMAD", (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log("AWAMAD Database created successfully");
  });
});
