import React, { Component } from 'react';

import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class Work extends Component {
  render() {
    const imageShapeInstance = (
      <Grid>
        <Row>
          <Col xs={3} md={3}>
            <Image src="images/echo.png" thumbnail />
          </Col>
          <Col xs={3} md={3}>
            <Image src="images/foodBytes.png" thumbnail />
          </Col>
          <Col xs={3} md={3}>
            <Image src="images/blog.png" thumbnail />
          </Col>
        </Row>
      </Grid>
    );

    return (
      <div className="work">
        <div>
          <h2>Check out my projects</h2>
        </div>
        {imageShapeInstance}
      </div>
    );
  }
}
