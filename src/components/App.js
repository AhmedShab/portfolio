import React, { Component } from 'react';
import NavLink from './NavLink';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul role="Nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
