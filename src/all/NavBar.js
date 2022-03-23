export default function NavBar(){
    return(
<div>
  <div id="preloader">      
    <div id="loading-animation">&nbsp;</div>
  </div>

  
  <header class="header">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
      
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-nav">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
           <a class="navbar-brand" href="#"><img src="assets/images/logo.png" alt=""/></a>
        </div>
        
        <div class="collapse navbar-collapse" id="navigation-nav">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a class="section-scroll" href="#wrapper">Home</a></li>
            <li><a href="#landing-offer">About</a></li>
            <li><a href="#features-section">Services</a></li>
            <li><a href="#team-section">Team</a></li>
            <li><a href="#screenshots-section">Works</a></li>
            <li><a href="#prices-section">Prices</a></li>
            <li><a href="#subscribe-section">Subscribe</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  
  </div>
    );
}