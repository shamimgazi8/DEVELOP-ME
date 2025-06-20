"use client";
import { useSignalR } from "@/hooks/useSignalR";
import React, { useEffect, useState } from "react";

const UserASender = () => {
  const [lat, setLat] = useState(23.8103);
  const [lon, setLon] = useState(90.4125);

  const { sendLocation } = useSignalR(() => {});

  useEffect(() => {
    const interval = setInterval(() => {
      const newLat = lat + (Math.random() - 0.5) * 0.01;
      const newLon = lon + (Math.random() - 0.5) * 0.01;

      setLat(newLat);
      setLon(newLon);

      sendLocation(newLat, newLon, "shamim@example.com");
    }, 3000);

    return () => clearInterval(interval);
  }, [lat, lon, sendLocation]);

  return (
    <div className="p-4">
      <h2>📡 User A - Sending Location</h2>
      <p>Latitude: {lat.toFixed(5)}</p>
      <p>Longitude: {lon.toFixed(5)}</p>
    </div>
  );
};

export default UserASender;
