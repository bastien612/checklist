import React from 'react';
import { CardHeader, Typography, Grid, withStyles } from '@material-ui/core';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const styles = theme => ({

})

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class MapPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
        };
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div>
                Coucou

                <Map center={position} zoom={this.state.zoom} style={{ height: '350px' }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </Map>
            </div>

        )
    }
}

export default withStyles(styles)(MapPage);