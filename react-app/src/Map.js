import React, { useRef, useEffect, useState } from 'react';
import './Map.css';
import mapboxgl from '!mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiaG90cGFwZXI3NyIsImEiOiJjbGNnY3F4Y3owaGJqM29wa3hjZ3JzYW16In0.PyZNfjumFmWG3E3Uwktnew';



 function Map() {
    const mapContainer = useRef('googleMap');
const map = useRef(null);
const [lng, setLng] = useState(2.333333);
const [lat, setLat] = useState(48.866667);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });
    return (
        <div>
          <div ref={mapContainer} className="map-container" />
        </div>
      );
}


export default Map;