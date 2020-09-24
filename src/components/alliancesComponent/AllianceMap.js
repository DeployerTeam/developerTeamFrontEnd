import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
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
        zoom: 11
    };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
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
 