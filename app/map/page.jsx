import { LayerManager } from "./components/LayerManager";
import { MapContainer } from "./components/MapContainer";
import { MapProvider } from "./components/MapProvider";
import { ToolBar } from "./components/ToolBar";
import { SearchBar } from "./components/SearchBar";
import { Logo } from "./components/Logo";
import "ol/ol.css";

export default function MapPage() {
  return (
    <MapProvider>
      <div className=" flex flex-col h-screen">
        <section className=" flex items-center justify-center p-2 gap-3 bg-gradient-to-br from-pink-100 to-blue-100 border-b-2 border-pink-500/70 ">
          <Logo />
          <ToolBar />
          <SearchBar />
        </section>
        <section className="flex-grow  flex relative">
          <LayerManager />
          <MapContainer />
        </section>
      </div>
    </MapProvider>
  );
}
