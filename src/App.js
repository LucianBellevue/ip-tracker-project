import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import arrow from "./assets/icon-arrow.svg";
import background from "./assets/pattern-bg-desktop.png";
// https://geo.ipify.org/api/v2/country,city?apiKey=at_jTYLk3RiEB0dH2y7orD2J8E6Uv3rM&ipAddress=8.8.8.8
function App() {
  return (
    <>
      <section>
        <div className="w-full absolute -z-10">
          <img src={background} alt="" className="w-full h-80 object-cover"/>
        </div>
        <article className="p-8">
          <h1 className="text-2xl text-center lg:text-3xl text-white font-bold mb-8">
            IP Address Tracker
          </h1>
          <form className="flex justify-center max-w-xl mx-auto">
            <input
              type="text"
              name="ipAddress"
              id="ipAddress"
              placeholder="Search for any IP address or domain"
              required
              className="py-2 px-4 rounded-l-lg w-full"
            />
            <button type="submit" className="bg-black py-4 px-4 hover:opacity-60 rounded-r-lg">
              <img src={arrow} alt="arrow" />
            </button>
          </form>
        </article>
        <article className="bg-white rounded-lg shadow p-8 mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto text-center md:text-left lg:-mb-16 relative" style={{ zIndex: 1000}}>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">IP Address</h2>
            <p className="font-semibold text-slate-900 text-lg md:text-xl xl:text-2xl">192.212.174.101</p>
          </div>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">Location</h2>
            <p className="font-semibold text-slate-900 text-lg md:text-xl xl:text-2xl">Brooklyn</p>
          </div>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">Timezone</h2>
            <p className="font-semibold text-slate-900 text-lg md:text-xl xl:text-2xl">UTC - 05:00</p>
          </div>
          <div>
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">ISP</h2>
            <p className="font-semibold text-slate-900 text-lg md:text-xl xl:text-2xl">SpaceX</p>
          </div>
        </article>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </>
  );
}

export default App;
