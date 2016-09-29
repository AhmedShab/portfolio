import React, { Component } from 'react';

import { Grid, Row, Col, Image } from 'react-bootstrap';
import NavLink from './NavLink';
import FontAwesome from 'react-fontawesome';

export default class Work extends Component {
  render() {
    const imageShapeInstance = (
      <Grid>
        <Row>
          <Col xs={3} md={3}>
            <a href="https://echo-project.herokuapp.com/"
               target="_blank">
              <Image src="images/echo.png" thumbnail />
            </a>
          </Col>
          <Col xs={3} md={3}>
            <a href="https://audioeats.herokuapp.com/"
               target="_blank">
              <Image src="images/foodBytes.png" thumbnail />
            </a>
          </Col>
          <Col xs={3} md={3}>
            <a href="https://rails-my-blog.herokuapp.com/"
               target="_blank">
              <Image src="images/blog.png" thumbnail />
            </a>
          </Col>
        </Row>
      </Grid>
    );

    return (
      <div>
        <div className="work">
          <div>
            <h2>Check out my projects</h2>
          </div>
          {imageShapeInstance}
        </div>
        <div className= "next-previous">
          <NavLink to="/">
            <FontAwesome
              className="link"
              name='a fa-arrow-circle-left'
              size='4x'
              />
          </NavLink>
          <NavLink to="/contact">
            <FontAwesome
              className="link"
              name='a fa-arrow-circle-right'
              size='4x'
              />
          </NavLink>
        </div>
      </div>
    );
  }
}
