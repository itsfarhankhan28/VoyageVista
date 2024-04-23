/* eslint-disable react/prop-types */
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet"
import { useSearchParams } from "react-router-dom"
import "leaflet/dist/leaflet.css"
import './Maps.css'

const Map = () => {

    const [searchParams] = useSearchParams()

    const latitude = searchParams.get('lat')
    const longitude = searchParams.get('long')

  return (
    <div className="">
        <MapContainer center={[`${latitude}`, `${longitude}`]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[`${latitude}`, `${longitude}`]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  )
}

export default Map
