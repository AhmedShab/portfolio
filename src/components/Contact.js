import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';
import NavLink from './NavLink';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact">
          <h2>
            Thanks for visting my website, <br/><br/>
            Please feel free to contact anytime. Would love to hear from you
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
      <NavLink className="previous" to="/work">
        <FontAwesome
          className="link"
          name='a fa-arrow-circle-left'
          size='4x'
          />
      </NavLink>
    </div>
    );
  }
}
