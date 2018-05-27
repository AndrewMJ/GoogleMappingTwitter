import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// var express = require('express');
// var app = express();

let mapArr = [
    {lat: 37.762391, lng: -122.439192},
    {lat: 37.759703, lng: -122.428093},
    {lat: 40.7128,   lng: -74.00460},
    {lat: 34.0522,   lng: -118.2437},
    {lat: 29.7604,   lng: -95.3698},
    {lat: 33.7490,   lng: -84.3880}
]

// app.post('/askTwitter', function(req, res){
//     const data = req.body.parsedData;
//     console.log("=================DATA========");
//     console.log(data);
//     console.log("=================DATA========");
// });

ReactDOM.render(<App myMapArr={mapArr}/>, document.getElementById('root'));
registerServiceWorker();


// export class MapContainer extends React.Component{}
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyBLrJTo6A6mEhwB3uIA8o5-D2cJPv1ft1g',
// })(MapContainer)