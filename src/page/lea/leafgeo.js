import { MapContainer, TileLayer, Marker, } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./styles.css";
import LeafletRoutingMachine from "./leafroute";
import imag from './icons/placeholder.png'
import u from './icons/placeholder.png'
import { Icon, divIcon, point } from "leaflet";
import Navbar from "../Navi";
import Footer from '../Footer'

const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: u,
  iconSize: [100, 100] // size of the icon
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(100, 100, true)
  });
};

const markers = [
  {
    geocode: [13.0299, 80.1681],
  },
]  

function Leaf() {
  const position = [13.0299, 80.1681];
  return (
    <div className="md:w-auto md:h-auto">
    <div>
      <Navbar/>
    </div>
      
    
      <div className="App">
        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/*  <LeafletGeocoder /> */}
          <LeafletRoutingMachine />
          <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createClusterCustomIcon}
            >
              {/* Mapping through the markers */}
              {markers.map((marker) => (
                <Marker position={marker.geocode} icon={customIcon}>
                </Marker>
              ))}

              {/* Hard coded markers */}
              {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
                <Popup>This is popup 1</Popup>
              </Marker>
              <Marker position={[51.504, -0.1]} icon={customIcon}>
                <Popup>This is popup 2</Popup>
              </Marker>
              <Marker position={[51.5, -0.09]} icon={customIcon}>
                <Popup>This is popup 3</Popup>
              </Marker>
            */}
        </MarkerClusterGroup>
        </MapContainer>

        <div className="w-50 flex justify-end mr-24 -translate-y-72 box-border w-50">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <div>
                <thead>
                  <tr>
                    <th></th>
                    <th>AWB No</th>   
                    <th>Product</th>
                    <th>Dispatch Status</th>
                  </tr>
                </thead>
              </div>
              <div>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>123</td>
                    <td>Apple</td>
                    <td>YES</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>12</td>
                    <td>Orange</td>
                    <td>No</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>10</td>
                    <td>Grapes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </div>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer/>
      </div>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: imag,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default Leaf;