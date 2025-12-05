"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map component with no SSR
const Map = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
      <div className="text-white">Loading map...</div>
    </div>
  ),
});

export default function MapWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
        <div className="text-white">Initializing map...</div>
      </div>
    );
  }

  return <Map />;
}