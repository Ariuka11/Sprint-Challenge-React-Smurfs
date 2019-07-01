import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      redirect: false
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    let {name, age, height} = this.state;
    axios
    .post('http://localhost:3333/smurfs', {name, age, height})
    .then(response => {
      this.props.sendFormData(response.data)
    })
    .catch(error => {
      console.error('Server Error', error)
    })

    this.setState({
      name: '',
      age: '',
      height: '',
      redirect: true
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if(this.state.redirect){
      return <Redirect to = '/' />
    }
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.addSmurf}>
        <FormGroup>
        <Label for="exampleEmail">Name</Label>
          <Input
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
          />
          <FormText color="muted">Name</FormText>
          </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Age</Label>
          <Input
            onChange={this.handleInputChange}
            value={this.state.age}
            name="age"
          />
           <FormText color="muted">Age</FormText>
           </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">Height</Label>
          <Input
            onChange={this.handleInputChange}
            value={this.state.height}
            name="height"
          />
           <FormText color="muted">Height</FormText>
          </FormGroup>
          <Button type="submit">Add to the village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
