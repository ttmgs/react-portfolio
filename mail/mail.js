require('dotenv').config()
const nodemailer = require('nodemailer');

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
  to: 'fariqjafer@gmail.com',
  subject: 'Testing and Testing',
  text: 'it works'
}


// send actual email
transporter.sendMail(mailOptions, function(err, data) {
  if(err) {
    console.log('errir occurs')
  } else {
    console.log('email successfully sent')
  }
});