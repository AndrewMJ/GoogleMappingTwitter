import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// export class MapContainer extends React.Component{}
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyBLrJTo6A6mEhwB3uIA8o5-D2cJPv1ft1g',
// })(MapContainer)