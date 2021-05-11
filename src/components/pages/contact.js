import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <main class="container"></main>
      <section class="row"></section>
      <div class="col-md-8"></div>
      <form class="block form-horizontal"></form>
      <h1 class="block-header">Connect with me</h1>
      <hr />
      <div class="form-group">
        <label for="name" class="col-sm-2 control-label">
          Name
        </label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="name"
            placeholder="Name"
          ></input>
        </div>
        <div class="form-group">
          <div />
          <label for="email" class="col-sm-2 control-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="email"
              placeholder="Email"
            />

            
           
          </div>
        </div>
      </div>
      {/* </main> */}
      {/* <!-- End of container --> */}
    </div>
  );
};

export default Contact;
