export default function Contact(){
    return(
<div>
<section>
      <div id="contact-section" class="pad-sec">

        <div class="container">

          <div class="title-section text-center animated out" data-animation="fadeInUp" data-delay="0">
              <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                  <h2>Get in touch</h2>
                  <hr/>
                  <p>Sed ac mattis justo. Vestibulum facilisis at arcu ac porta. Vivamus at ipsum at quam hendrerit gravida.</p>
              </div>
            </div> 
          </div> 

          <div class="form-wrapper">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                
                
                <form action="assets/php/contact.php.htm" method="post" name="contactform" id="contactform" class="animated out" data-animation="fadeInUp" data-delay="0">

                  <fieldset>
                    <div class="form-group">
                      <input class="form-control br-b" type="text" name="name" id="name" placeholder="Name"/>
                    </div>

                    <div class="form-group">
                      <input class="form-control br-b" type="email" name="email" id="email" placeholder="Email"/>
                    </div>

                    <div class="form-group">
                      <textarea class="form-control br-b" name="message" id="message" placeholder="Message..."></textarea>
                    </div>
                  </fieldset>
                  
                 
                  <div class="form-group">
                    <input type="submit" name="submit" value="Send message" id="submit" class="btn btn-sm btn-dark"/>
                  </div>

                  <div id="alert"></div>

                </form>

              </div> 
            </div> 
          </div>  

        </div> 
      </div> 
    </section>

</div>
    );
}