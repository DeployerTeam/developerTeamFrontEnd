import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './AllianceMap.css';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default class Map extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        center: {
        lat: 4.753752,
        lng: -74.054166
        },
        zoom: 10
    };
 
  render() {
    return (
      <div className='mapContainer'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ''}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={4.753752}
            lng={-74.054166}
            text="VetStore"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 