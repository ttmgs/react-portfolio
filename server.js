const express = require('express');
const nodemailer = require('nodemailer')



const PORT = process.env.PORT || 3001;
const app = express();


// data parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json());




// setting up nodemailer
require('dotenv').config()

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
let mailOptions = {
  from: 'magditiea@gmail.com',
  to: 'balltt38@gmail.com',
  subject: 'Testing',
  text: 'it works'
}


// send actual email (sending mailoptions through a transporter sendmail method)
transporter.sendMail(mailOptions, function(err, data) {
  if(err) {
    console.log('error occurs' + err)
  } else {
    console.log('email successfully sent')
  }
});








app.listen(PORT, function() {
  console.log('Server is running on http://localhost:' + PORT)
});