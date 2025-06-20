"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/utils/leafletSetup";
import { useSignalR } from "@/hooks/useSignalR";

const UserBReceiver = () => {
  const [location, setLocation] = useState({
    lat: 23.8103,
    lon: 90.4125,
    userName: "",
  });

  useSignalR((data: any) => {
    console.log("Received:", data);
    setLocation(data);
  });

  return (
    <div className="p-4">
      <h2>📍 User B - Receiving Location</h2>
      <MapContainer
        center={[location.lat, location.lon]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[location.lat, location.lon]}>
          <Popup>{location.userName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default UserBReceiver;
