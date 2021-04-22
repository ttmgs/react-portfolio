import React from "react";



function Contact() {
  return (
  <div className="contact">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    <a class="navbar-brand" href="index.html" id="logo"><bold>MAGDI TIEA</bold></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="index.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="aboutme.html">About Me</a>
        </li>
      </ul>
    </div>
  </nav>
      {/* // <!-- End of navbar --> */}

  {/* //  <!-- Start of container --> */}
  <main class="container">
    <section class="row">
      <div class="col-md-8">
        <form class="block form-horizontal">
          <h1 class="block-header">Connect with me</h1>
          <hr />
          <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="name" placeholder="Name">
        
            </ input>

          </div>
<div class="form-group">
   <label for="email" class="col-sm-2 control-label">Email</label>
       <div class="col-sm-10">
              <input type="password" class="form-control" id="email" placeholder="Email">
            <input/>
         </div>

          <div class="form-group">
            <label class="col-sm-2 control-label" for="msg">Message</label>
            <div class="col-sm-10">
              <textarea id="msg" class="form-control" rows="3" placeholder="Message"></textarea>
            </div>
          </div>
          <button type="button" class="btn btn-danger">Send</button>
        </form>
      </div>
    </section>
  </main>
  {/* <!-- End of container --> */}


  <!-- Start of footer -->
  <footer class="footer">
    <div class="two-toned-footer-color"></div>
    <p class="text-muted text-muted-footer text-center">
      &copy; Copyright
    </p>
  </footer>
  {/* <!-- End of footer --></section> */}

  </div>  
  )
}

