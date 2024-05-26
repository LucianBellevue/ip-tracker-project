import L from "leaflet";
import icon from "./assets/icon-location.svg";

export default L.icon({
    inconSize: [32, 40],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: icon,
})
