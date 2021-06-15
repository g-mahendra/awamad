const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello server");
});

app.get("/getreview/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "mahendra",
    password: "mahendra",
    database: "awamad",
  });
  connection.connect();
  console.log("Connected");
  try {
    connection.query(
      `SELECT * FROM reviews WHERE id=${req.params.id}`,
      (err, rows, fields) => {
        if (err) console.log(err);
        else {
          res.send(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});

app.listen(5000, "localhost", () => {
  console.log("Listening of locahost:5000");
});
