import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import bannerImage from "../assets/capp.avif"; // Make sure Cap.JPG is in src/assets folder

const containerStyle = {
  width: "70%",
  height: "450px",
   margin: "0 auto",
  borderRadius: "10px",
};

const center = {
  lat: 11.0168, // Coimbatore
  lng: 76.9558,
};

// Parlour locations
const locations = [
  { lat: 11.0168, lng: 76.9558 }, // Coimbatore
  { lat: 12.9716, lng: 77.5946 }, // Bangalore
  { lat: 13.0827, lng: 80.2707 }, // Chennai
  { lat: 17.385, lng: 78.4867 },  // Hyderabad
];

function ParlourLocations() {
  return (
    <section className="parlour-map-section">
      {/* Fullscreen Banner */}
      <div className="banner-container">
        <img src={bannerImage} alt="Milky Mist Parlour" className="banner-img" />
      </div>
<br></br><br></br><br></br>
      <h2 className="map-heading">Find Our Parlour In Your <br></br>Nearest Location</h2>
      <LoadScript googleMapsApiKey={"AIzaSyCeaYJYJIGGjxg0b0Zbz8-Vybr2ve6FnME"}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </LoadScript>
    </section>
  );
}

export default ParlourLocations;




