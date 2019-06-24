import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import connect from "react-redux/es/connect/connect";

const mapStyles = {
    width: '50%',
    height: '100%',
};

export class MapContainer extends Component {
    render() {
        const { locations } = this.props;
        return (
                <Map
                    google={this.props.google}
                    zoom={6}
                    style={mapStyles}
                    initialCenter={{
                        lat: 52.5200,
                        lng: 13.4050
                    }}
                >
                    {
                        locations.length > 0 &&
                            locations.map(l =>
                                <Marker
                                key={l.id}
                                position={{ lat : l.latitude, lng : l.longitude}}
                            />)
                    }
                </Map>
        );
    }
}

export const mapStateToProps = state => {
    const { locations : locationsData } = state;
    const {  locations } = locationsData || {
        locations : []
    };
    return {
        locations
    };
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBGz9ja6YQhmJT5XcLbd-Q31bF30cBpscs'
})(connect(mapStateToProps,null)(MapContainer));
