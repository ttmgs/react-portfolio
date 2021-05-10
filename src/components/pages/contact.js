import React from "react";



const Contact = () => {
  return (

<div>
  {/* //  <!-- Start of container --> */}
  <main class="container"></main>
    <section class="row"></section>
      <div class="col-md-8"></div>
        <form class="block form-horizontal"></form>
          <h1 class="block-header">Connect with me</h1>
          <hr />
          <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="name" placeholder="Name">
        
            </ input>

          </div>
<div class="form-group"><div/>
   <label for="email" class="col-sm-2 control-label">Email</label>
       <div class="col-sm-10">
              <input type="password" class="form-control" id="email" placeholder="Email"/>
            

          <div class="form-group">
            <label class="col-sm-2 control-label" for="msg">Message</label>
            <div class="col-sm-10">
              <textarea id="msg" class="form-control" rows="3" placeholder="Message"></textarea>
            </div>
          </div>
          <button type="button" class="btn btn-danger">Send</button>
        </div>
      </div>
    </div>
  {/* </main> */}
  {/* <!-- End of container --> */}


  {/* <!-- Start of footer --> */}
  <footer class="footer"><footer/>  

    <div class="two-toned-footer-color"></div>
    <p class="text-muted text-muted-footer text-center">
      &copy; Copyright
    </p>
  </footer>
  {/* <!-- End of footer --></section> */}


  </div> 
  )
}

export default Contact;

