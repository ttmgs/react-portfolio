import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/contact.css";

const Contact = () => {

const { firstName, setFirstName } = useState("");
const { lastName, setLastName } = useState("");
const { textArea, setTextArea } = useState("");
const { country, setCountry } = useState("");


const handleClick = (e) => {
  e.preventDefault();

  if(e.target.id === "fname") {
    setFirstName(e.target.value)
  }  else {
    lastName(e.target.value)
  }
}

const handleSubmit = (e) => {
  e.preventDefault();

  const dataToSubmit = {
    firstName,
    lastName,
    country,
    textArea,
  }

  axios.post("/api/sendMail", dataToSubmit)
};


  return (

    <div>

    <h3>Send me a message</h3>
    <div class="container"/>
      <form action="/action_page.php"/>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." value={firstName} onChange={handleClick}/>
    
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={lastName} onChange={handleClick}/>
    
        <label for="country">Country</label>
        <select id="country" name="country" value={country}  onChange={handleClick}> 
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
    
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." value={textArea} onChange={handleClick}></textarea>
    
        <button type="submit" value="Submit" onClick={handleSubmit}>Send Email</button>
        </div>

      
      

  );
};

export default Contact;
