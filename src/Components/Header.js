import React, { Component } from 'react';
import "./Header.css";
class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hello World <br/> I'm Ahmed Ismail.</h1>
            <h3>I'm a Tunisia based <span>Junior Developer</span>.MERN STACK Developer .</h3>
            <hr />
            
            
                  
               <a href="https://www.linkedin.com/in/ahmed-ismail-1a1542178/" target="_blank">
                   <img src="https://digi-act.com/wp-content/uploads/2019/12/linkedin-icon-logo-png-transparent.png"/>
                    </a>

               <a href="https://www.facebook.com/profile.php?id=100044046672652" target="_black"> 
               <img className="image__" src="https://www.clipartmax.com/png/full/165-1656168_facebook-fb-logo-symbol-social-icon-public-icon-facebook-logo-logo-fb.png"/>
                </a>

               <a href="https://twitter.com/AhmedIs83720933" target="_blank">
                   <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"/> 
                   </a>


               <a href="https://www.hackerrank.com/ahmid_ismail" target="_blank">
                   <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_060528149c093ad5a64d6d8428c514c5/hackerrank.png"/>
                    </a>
               <a href="https://github.com/AHMYOUSS/" target="_blank">
                   <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png"/>
                    </a>

              
            
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
