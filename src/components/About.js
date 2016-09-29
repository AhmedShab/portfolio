import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import NavLink from './NavLink';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>
          Hello,
          <br/><br/>
          My name is Ahmed. I'm a full stack web developer.
          <br/><br/>
          Making web applications is my passion. I enjoy my work and always looking forward to create new project
        </h2>

        <NavLink to="/work">
          <FontAwesome
            name='a fa-arrow-circle-right'
            size='4x'
            />
        </NavLink>
      </div>
    );
  }
}
