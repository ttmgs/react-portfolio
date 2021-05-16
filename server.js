const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors');
require('dotenv').config()


const PORT = process.env.PORT || 8080;
const app = express();


// data parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json());



// connecting to the main
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
})

// verify the transporter
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log( `== Server is ready to take messages: ${success} ==`);
});

// everything you need to send to the user
app.post("/send", (req, res) => {
let mailOptions = {
  from: `${req.body.mailerState.email}`,
  to: process.env.email,
  subject: `${res.body.mailerState.email}`,
  text: `${req.body.mailerState.message}`
};


// send actual email (sending mailoptions through a transporter sendmail method)
transporter.sendMail(mailOptions, function(err, data) {
  if(err) {
   res.json({
     status: "fail",
   });
  } else {
    console.log("== Message Sent ==");
    res.json({
      status: "success",
    });
  }
});
});








app.listen(PORT, function() {
  console.log('Server is running on http://localhost:' + PORT)
});