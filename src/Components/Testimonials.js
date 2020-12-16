import React, { Component } from 'react';
import './Testimonials.css';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                     <p className="testimonials"> Here you should write some nice things that someone has said about you.
                                          No lies though, employers can tell when you are lying.

                  Kareem Abdul Jabbar
                  That Ahmed Ismail must be one of the most 
                  brilliant developers I've ever met! It is amazing that nobody has hired him yet.
                  Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience 
                  but I am confident that he will be one of your 
                  best developers in no time!
            </p>
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
