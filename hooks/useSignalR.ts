"use client";
import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";

const HUB_URL = "https://tech-test.raintor.com/Hub";

export const useSignalR = (
  onReceive: (data: { userName: string; lat: number; lon: number }) => void
) => {
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(HUB_URL, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Warning)
      .build();

    connectionRef.current = connection;
    startedRef.current = false;

    connection.on("ReceiveLatLon", onReceive);

    let isMounted = true;

    connection
      .start()
      .then(() => {
        if (!isMounted) {
          // If component unmounted while connecting, stop it now
          return connection.stop();
        }
        startedRef.current = true;
        console.log("✅ SignalR connected");
      })
      .catch((err) => {
        console.error("❌ SignalR connection error:", err);
      });

    return () => {
      isMounted = false;
      if (startedRef.current && connection.state !== "Disconnected") {
        connection
          .stop()
          .then(() => console.log("🛑 SignalR stopped"))
          .catch((err) => console.error("❌ Error stopping SignalR:", err));
      }
    };
  }, [onReceive]);

  const sendLocation = (lat: number, lon: number, userName: string) => {
    if (connectionRef.current?.state === signalR.HubConnectionState.Connected) {
      connectionRef.current.invoke("SendLatLon", lat, lon, userName);
    } else {
      console.warn("⚠️ Cannot send, SignalR not connected");
    }
  };

  return { sendLocation };
};
