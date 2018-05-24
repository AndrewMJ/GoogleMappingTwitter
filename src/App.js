import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }

  // initMap() {
  //   // The location of Uluru
  //   var uluru = {lat: -25.344, lng: 131.036};
  //   // The map, centered at Uluru
  //   var map = new google.maps.Map(
  //       document.getElementById('map'), {zoom: 4, center: uluru});

  //   // The marker, positioned at Uluru
  //   var marker = new google.maps.Marker({position: uluru, map: map});
  // }
  render() {
    return (
      <div className="App">


        <Map 
        style={{
            minWwidth: "200px",
            minHeight: "200px"
          }}
          google={this.props.google}
          zoom={4}
      
        />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(App);
