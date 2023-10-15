import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import truck from './icons/drone (2).png'
import Geosuggest from 'react-geosuggest';
import './styles.css'

const Leafroute = () => {
  const map = useMap();
  const [startPoint, setStartPoint] = useState([0, 0]);
  const [destinationPoint, setDestinationPoint] = useState([0, 0]);
  let DefaultIcon = L.icon({
    iconUrl: truck,
    iconSize: [100, 100],
  });

  const handleStartSelect = (suggest) => {
    if (suggest) {
      setStartPoint([suggest.location.lat, suggest.location.lng]);
    }
  };

  const handleDestinationSelect = (suggest) => {
    if (suggest) {
      setDestinationPoint([suggest.location.lat, suggest.location.lng]);
    }
  };

  useEffect(() => {
    const marker1 = L.marker(startPoint, { icon: DefaultIcon }).addTo(map);

    L.Routing.control({
      waypoints: [L.latLng(startPoint), L.latLng(destinationPoint)],
      lineOptions: {
        styles: [
          {
            color: "blue",
            weight: 6,
            opacity: 0.8,
          },
        ],
      },
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: true,
    })
      .on("routesfound", function (e) {
        e.routes[0].coordinates.forEach((c, i) => {
          setTimeout(() => {
            marker1.setLatLng([c.lat, c.lng]);
          }, 1000 * i);
        });
      })
      .addTo(map);
  }, [DefaultIcon, map, startPoint, destinationPoint]);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "100vh" }}>
        {/* Start and Destination input boxes */}
        <div className="start-box">
          <label>Start Point:</label>
          <Geosuggest onSuggestSelect={handleStartSelect} placeholder="Enter start location" />
        </div>
        <div className="dest-box">
          <label>Destination Point:</label>
          <Geosuggest onSuggestSelect={handleDestinationSelect} placeholder="Enter destination location" />
        </div>
      </div>
    </div>
  );
};

export default Leafroute;
