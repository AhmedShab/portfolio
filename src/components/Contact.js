import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2>
          Thanks for visting my website, <br/><br/>
          Please feel free to contact me on one of the following methods:
        </h2>
        <p>Flick me an email to ahmed.vuw@gmail.com</p>
        <div className= "contact-links">
          <a href="https://nz.linkedin.com/in/ahmed-shaaban-4b4546105"
            target="_blank">
            <i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/AhmedShab/"
            target="_blank">
            <i className="fa fa-github-square fa-4x" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/A_Shab_"
            target="_blank">
            <i className="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}
