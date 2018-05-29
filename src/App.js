import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TwitterHandle from './TwitterHandle.js'

{/* <InfoWindow /> gives the ability to pop up "more info" on the Map */}

class App extends Component {
  constructor(props){
    super(props);

    //console.log(props.myMapArr);
    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      messageFromExpress: [],
      currentLocation: {
        lat: 0,
        lng: 0
      },
      currLocation: "+Oakland, +CA",
      locations: []

    };
  }

  componentDidMount(){
    this.getStuffFromExpress();
  }

  // Grab Location from twitter and convert to Geo Location
  getGeoCode(){
    axios({
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=+${this.state.currLocation}&key=AIzaSyBLrJTo6A6mEhwB3uIA8o5-D2cJPv1ft1g`
    }).then(geoData => {
      // console.log(geoData.data.results[0].formatted_address);
      // console.log(geoData.data.results[0].geometry.location);
      // console.log(this.state.locations)
      let addLocation = this.state.locations;
      addLocation.push(geoData.data.results[0].geometry.location);
      this.setState({locations: addLocation})
    });
  }

  // Grab stuff from Twitter API
  getStuffFromExpress(){
    axios({
      method: 'get',
      url: 'http://localhost:3030/askTwitter',
    }).then(responseFromExpress => {
      let array = [];

      responseFromExpress.data.forEach(element => {
        let strArray = element.location.split(', ');
        for(let i=0; i < strArray.length; i++){
          strArray[i] = "+" + strArray[i];
        }

        let myLocation = strArray.join('');
        this.setState({currLocation: myLocation});
        // console.log(myLocation);

        array.push(element);
        this.getGeoCode();
      });
      
      // console.log(JSON.parse(responseFromExpress.data[0]));
      this.setState({
        messageFromExpress: array
      });
    });
  }

  // Does something when mouse over the marker
  // onMouseoverMarker(props, marker, e){
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });
  // }

  // Does something when marker is click
  onMarkerClick(props, marker1, e){
    // console.log("showInfo: " + this.state.showingInfoWindow);
    // console.log( props);
    // console.log("marker: " + marker1);
  
    this.setState({
      selectedPlace: props,
      activeMarker: marker1,
      showingInfoWindow: true
    });
  }


  render() {
    let markerList = [];
    let infoList = [];
    let dataList = [];

    // Style the marker
    const style={
      Marker:{
        height:'10px', 
        width:'10px'
      }
    }

    // Place markers around the map 
    this.state.locations.map((element, index)=>{
      markerList.push(<Marker

        // Allows us to click on this marker to do something (show tweet)
        onClick={(e)=>{this.onMarkerClick(e)}}

        // Not sure what this does
        //title={'The marker`s title will appear as a tooltip.'}

        // name: Controls what goes inside the box
        name={<TwitterHandle twitterHandle={this.state.messageFromExpress[index]}/>}

        // posiition: posisition of the Marker on the map
        position={{lat: element.lat, lng: element.lng}} 
        style={style.Marker}
      />);
    });

  return (
      <div className="App">
      
        {/* DISPLAY THE MAP */}
        <Map className="map"
        //{/*  SIZE OF MAP COMPARE TO SCREEN*/}
          style={{
            height: "400px",  
            width: "100%"
            }}
            google={this.props.google}
            //{/* INTIALIZE CENTER OF MAP */}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807 
            }}

           // {/* CONTROL ZOOM OF MAP */}
            zoom={5}
        >  

        {/* LIST of multiple <Marker>...</Marker> setup above */}
        {markerList}

        {/* Displays the tweet box */}
        <InfoWindow 
          position={{lat: 40.7128,   lng: -74.00460}}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow} 
        > 
          <div>
            <h1>{this.state.selectedPlace.name} </h1>
          </div>
        </InfoWindow> 
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(App);

