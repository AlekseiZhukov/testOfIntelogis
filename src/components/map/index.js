import React from "react";
import { MapContainer,  Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = () => {

    return (
<>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px' }}>
                <Marker position={[51.505, -0.09]} />
            </MapContainer>
</>
    );
}

export default Map;
