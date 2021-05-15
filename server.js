const express = require('express');
const nodemailer = require('nodemailer')
// const bodyParser = require('body-parser');


const PORT = process.env.PORT || 5000;
const app = express();


// setting up nodemailer
require('dotenv').config()

// connecting to the main
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

// everything you need to send to the user
let mailOptions = {
  from: 'magditiea@gmail.com',
  to: 'balltt38@gmail.com',
  subject: 'Testing and Testing',
  text: 'it works'
}


// send actual email
transporter.sendMail(mailOptions, function(err, data) {
  if(err) {
    console.log('error occurs', err)
  } else {
    console.log('email successfully sent')
  }
});




app.listen(PORT, function() {
  console.log('Server is running on http://localhost:' + PORT)
});