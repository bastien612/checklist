import React from 'react';
import { CardHeader, Typography, Grid, withStyles } from '@material-ui/core';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Header from "components/Layouts/Header";


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
            initLat: 44.825810,
            initLng: -0.620837,
            initZoom: 13,
            markersCoord: shops,
            currentId: 3
        };

        this.mapRef = React.createRef();
    }


    handleClick = (e) => {
        console.log("click latnlng : " + JSON.stringify(e.latlng));
        this.addMarker(e.latlng);

        // if (map != null) {
        //     map.leafletElement.locate();
        // }
    }

    addMarker = (latlng) => {
        const map = this.mapRef.current
        if (map != null) {
            const coordsCopy = JSON.parse(JSON.stringify(this.state.markersCoord));
            coordsCopy.push({ id: this.state.currentId, coord: [latlng.lat, latlng.lng] })
            console.log("coordsCopy :" + JSON.stringify(coordsCopy));
            this.setState({
                markersCoord: coordsCopy,
                currentId: this.state.currentId + 1
            })
        }
    }

    handleLocationFound = (e) => {
        this.addMarker(e.latlng);
    }

    render() {
        console.log(this.state.markersCoord);

        const position = [this.state.initLat, this.state.initLng];

        const markers = this.state.markersCoord.length !== 0 ? this.state.markersCoord.map(obj => {
            return (
                <Marker key={obj.id} position={obj.coord}>
                    <Popup>You are here</Popup>
                </Marker>
            )
        }) : null;

        return (
            <Grid container spacing={16} justify="center">
                <Grid item xs={12} >
                    <Header />
                </Grid>
                <Grid item xs={6} >
                    <Map center={position}
                        zoom={this.state.initZoom}
                        style={{ height: '400px' }}
                        onClick={this.handleClick}
                        onLocationfound={this.handleLocationFound}
                        ref={this.mapRef}
                    >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {markers}

                    </Map>
                </Grid>
            </Grid>

        )
    }
}

const shops = [{
    id: 1,
    coord: [44.843545, -0.649821]
}, {
    id: 2,
    coord: [44.830260, -0.620298]
}]

export default withStyles(styles)(MapPage);