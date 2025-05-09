import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.MAPBOX_GL_TOKEN;

const TARGET_COORDS: [number, number] = [105.8295, 21.0247];

export default function MapTile() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: TARGET_COORDS,
      zoom: 3,
    });

    map.on("load", () => {
      map.resize(); // fix rendering issues
      map.flyTo({ center: TARGET_COORDS, zoom: 11, essential: true });

      const el = document.createElement("div");
      el.className = "relative w-8 h-8";
      el.innerHTML = `
        <span class="absolute w-full h-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
        <span class="absolute w-3 h-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600"></span>
      `;

      new mapboxgl.Marker(el).setLngLat(TARGET_COORDS).addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="animate-fadeIn h-[300px] w-full overflow-hidden rounded-2xl shadow-lg">
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
}
