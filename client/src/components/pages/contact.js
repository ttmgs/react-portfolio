import React from "react";
import { useState } from "react";
import "../styles/contact.css";


const Contact = () => {



  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };
 


  return (

    <div>
        <header>SEND ME AN EMAIL</header>

<form id="form" class="topBefore" onSubmit={submitEmail}>
		
		  <input id="name" type="text" placeholder="NAME" name="name" onChange={handleStateChange} value={mailerState.name} />
		  <input id="email" type="text" placeholder="E-MAIL" onChange={handleStateChange} value={mailerState.email}/>
      <textarea id="subject" name="message" type="text" onChange={handleStateChange} value={mailerState.message} placeholder="Write something.."></textarea>
  <input id="submit" type="submit" value="GO!"/>
  
</form>

        </div>
  );
};

export default Contact;
