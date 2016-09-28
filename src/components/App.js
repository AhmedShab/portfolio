import React, { Component } from 'react';
import NavLink from './NavLink';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class App extends Component {
  render() {
    const navbarInstance = (
    <Navbar inverse>
      <Navbar.Collapse>
        <Nav>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
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
