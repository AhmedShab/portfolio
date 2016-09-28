import React, { Component } from 'react';
import NavLink from './NavLink';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

import About from './About';
import Work from './Work';
import Contact from './Contact';

export default class App extends Component {
  render() {
    const navbarInstance = (
    <Navbar inverse>
      <Navbar.Collapse>
        <Nav>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/work">Work</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
    return (
      <div>
        {navbarInstance}
        {this.props.children}
      </div>
    );
  }
}
