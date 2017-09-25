import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button, Image } from 'react-bootstrap';
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';

class App extends Component {
  render() {
    var circle_Radius = 150;
    var circleStyleRed = {
      padding:10,
      margin:20,
      display:"inline-block",
      backgroundColor: '#E94F37',
      borderRadius: "50%",
      width:circle_Radius,
      height:circle_Radius,
    };
    var circleStyleBlue = {
      padding:10,
      margin:20,
      display:"inline-block",
      backgroundColor: '#1C89BF',
      borderRadius: "50%",
      width:circle_Radius,
      height:circle_Radius,
    }
    var circleStyleGreen = {
      padding:10,
      margin:20,
      display:"inline-block",
      backgroundColor: '#A1D363',
      borderRadius: "50%",
      width:circle_Radius,
      height:circle_Radius,
    }
    return (
      <div className="App">
        <div class="container-fluid">
          <Row>
            <Col sm={6}>
              <h2>About Me</h2>
              <h4>Tanawat Kaochalongkeang</h4>
              <h4>Facebook: Jab Tanwat kao</h4>      
              {/*<button class="btn btn-default btn-lg">Get in Touch</button>*/}
              {/*<Button class="btn btn-default btn-lg">Get in Touch</Button>*/}
              <div style={circleStyleRed}>Resume</div>
              <div style={circleStyleBlue}>Project</div>
              <div style={circleStyleGreen}>About me</div>
              <div class="circleStyleRed">Resume</div>
              <div class="circleStyleBlue">Project</div>
              <div class="circleStyleGreen">About me</div>
            </Col>
            <Col sm={6}>
              <Image src={require("./../src/IMG_0061.JPG")} height="300" circle />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
