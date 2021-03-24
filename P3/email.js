const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: myEmail,
    pass: myPassword,
  },
});

fs.readFile("sample2.html", (err, data) => {
  if (err) res.write(err);
  else {
    var mailOptions = {
      from: myEmail,
      to: myAnotherEmail,
      subject: "AWAMAD Practicle 3",
      html: data,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent ${info.response}`);
      }
    });
  }
});
