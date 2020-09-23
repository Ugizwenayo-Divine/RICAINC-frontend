import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import getAddress from './locationAddress';

const mapStyles = {
  width: '90%',
  height: '30%'
};

export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latitude:-2.438,
      longitude:28.922,
      markers: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "Kigali, kacyiru",
          position: { lat: -1.935114,
            lng: 30.082111 }
        }
      ],
      address:'',
    };
    
    this.onClick = this.onClick.bind(this);
  }
  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(props,'ppp');
  }
  onClick = async (t, map, coord) =>{
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "",
            name: "",
            position: { lat, lng }
          }
        ]
      };
    });    
    const address = await getAddress(lat,lng);
    this.setState({address:address});
    // console.log('see', lng,lat, address);
  }
  fetchPlaces = (event) =>{
    console.log(event,'place')
  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition((position) =>{
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      this.setState({
        latitude:position.coords.latitude,
        longitude:position.coords.longitude,
      })

    });
  }
  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }
  render() {
    console.log(this.state.latitude,this.state.longitude,'lll');
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom= {14}
        onClick={this.onClick}
        initialCenter = {{ 
          lat: this.state.latitude, 
          lng: this.state.longitude }}
        centerAroundCurrentLocation
      >
        {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
              onClick={this.onMarkerClick}
            />
          ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name || 'Current location'}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'YOUR_KEY'
  }
))(MapContainer)