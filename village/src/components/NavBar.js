import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Row, Col  } from 'reactstrap';

class NavigationBar extends Component {
    render(){
        return (
            <div >
              <Navbar color="light" light expand="md">
              <Row>
              <Col xs="6">
                <NavLink to = '/'>Home</NavLink>
                </Col>
                <Col xs="6">
                <NavLink to = '/smurf-form'>Add New Smurf</NavLink>
                </Col>
                </Row>
              </Navbar>
            </div>
        );
    }
}

export default NavigationBar;