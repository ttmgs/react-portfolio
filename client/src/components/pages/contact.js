import React from "react";
// import { useState } from "react";
import "../styles/contact.css";
// import $ from 'jquery';


const Contact = () => {

// const { firstName, setFirstName } = useState("");
// const { lastName, setLastName } = useState("");
// const { textArea, setTextArea } = useState("");
// const { country, setCountry } = useState("");


// on submit we disable the browsers behaiver(preventDefault) 
  // function formSubmit() {
  //   document.getElementById('#form').onClick;{('submit', (e) => {
  //     e.preventDefault();

  //     const firstName = document.getElementById('#fname').value().trim();
  //     const lastName = document.getElementById('#lastName').value().trim();
  //     const country = document.getElementById('#country').value().trim();

  //    const data = {
  //      firstName,
  //      lastName,
  //      country
  //    }

  //    //  sending data to the server (/email)
  //    $.post('/email', data, '')

  //       console.log('server recieved our data')
  //   })}
  

  return (

    <div>

    <h3>Send me a message</h3>
    <form id="form">
    <div class="container"/>
      <form action="/action_page.php"/>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    
        <label for="country">Country</label>
        <select id="country" name="country"> 
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
    
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    
        <button type="submit" value="Submit">Send Email</button>
        </form>

        </div>
        
      
      

  );
};

export default Contact;
