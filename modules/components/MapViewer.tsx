"use client"; // if you're in App Router (e.g., /app/map-viewer/page.tsx)

import dynamic from "next/dynamic";
import React from "react";

// ✅ Dynamic import with SSR disabled
const UserBReceiver = dynamic(
  () => import("@/modules/components/SignalR/UserBReceiver"),
  {
    ssr: false,
  }
);

const MapViewerPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌍 External Location Viewer</h1>
      <UserBReceiver />
    </div>
  );
};

export default MapViewerPage;
