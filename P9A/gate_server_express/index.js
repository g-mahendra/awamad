const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getgaterecords", (req, res) => {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "mahendra",
      password: "mahendra",
      database: "awamad",
    });
    connection.connect();
    console.log("Connected");
    connection.query("SELECT * FROM gate", function (err, rows, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        data: rows,
      });
      console.log(rows);
    });
    connection.end();
  } catch (e) {
    res.json({
      status: 400,
      message: e.message,
    });
  }
});

app.post("/addrecords", (req, res) => {
  var { name, branch, id_no, mobile, address } = req.body;
  id_no = id_no.toString();
  bobile = mobile.toString();
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "mahendra",
      password: "mahendra",
      database: "awamad",
    });
    connection.connect();
    console.log("Connected");
    connection.query(
      `INSERT INTO gate(name, branch, id_no, mobile, address) VALUES( '${name}', '${branch}', 
      '${id_no}', '${mobile}', '${address}')`,
      function (err, result) {
        if (err) throw err;
        console.log("Data Inserted");
        res.send("Record Inserted");
      }
    );
    connection.end();
  } catch (e) {
    console.log(e.message)
  }
});

app.listen(5000, "localhost", () =>
  console.log("Listening on localhost:50000")
);
