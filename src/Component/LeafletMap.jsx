"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import * as Geocoder from "leaflet-control-geocoder";

// Fix leaflet icon paths
if (typeof window !== "undefined") {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png",
  });
}

export default function LeafletMap() {
  const [center, setCenter] = useState(null);
  const [donors, setDonors] = useState([]);
  const mapRef = useRef(null);

  // Visitor location
  useEffect(() => {
    if (!navigator.geolocation) {
      setCenter({ lat: 23.8103, lng: 90.4125 });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => setCenter({ lat: 23.8103, lng: 90.4125 })
    );
  }, []);

  // Donor data
  useEffect(() => {
    fetch("/api/donor/all")
      .then((res) => res.json())
      .then(setDonors)
      .catch(console.log);
  }, []);

  if (!center) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800">
        <p className="text-white">Loading map...</p>
      </div>
    );
  }

  return (
    <MapContainer
      whenCreated={(map) => {
        mapRef.current = map;

        // Add Geocoder Search Box (top-right)
        Geocoder.Control.geocoder({
          defaultMarkGeocode: true,
          position: "topright", // important!
        })
          .on("markgeocode", (e) => {
            map.setView(e.geocode.center, 15);
          })
          .addTo(map);
      }}
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      className="h-full w-full rounded-xl"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Visitor Location */}
      <Marker position={center}>
        <Popup>Your Location</Popup>
      </Marker>
      <Circle center={center} radius={1000} pathOptions={{ color: "red" }} />

      {/* Donor Markers */}
      {donors.map((d) => (
        <Marker key={d.id} position={[d.latitude, d.longitude]}>
          <Popup>
            <b>{d.name}</b>
            <br />
            {d.bloodGroup}
            <br />
            {d.phone}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}