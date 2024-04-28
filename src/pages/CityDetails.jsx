import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"
import { useEffect,useState } from "react"
import Weather from "../components/Weather"
import HotelSearchForm from "../components/HotelSearchForm"
import { Link } from "react-router-dom"
import mapimage from '../assets/IMG/mapimage.jpg'

const CityDetails = () => {

    const [weatherstat,setWeatherstat] = useState({})

    const [entityId,setEntityId] = useState()

    const params = useParams()
    console.log(params.id)

    const cities = useSelector((store)=>store.gettopcities.topcitiesarray)
    console.log(cities[params.id])

    const cityid = params.id

    const getWeatherData = async()=>{
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=fa1789c8aa0c4624999192643241503&q=${cities[cityid].title}&aqi=no`)
        const data = response.data
        console.log(data)
        setWeatherstat(data.current)
        return data
    }

    const options = {
        method: 'GET',
        url: 'https://skyscanner80.p.rapidapi.com/api/v1/hotels/auto-complete',
        params: {
          query: `${cities[cityid].title}`,
          market: 'US',
          locale: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '408bfd43d1msh81efb1f570bcd88p1934d1jsnebf68378b693',
          'X-RapidAPI-Host': 'skyscanner80.p.rapidapi.com'
        }
      };

    const getHotelDetails = async()=>{
        try{
            const res = await axios.request(options)
            const data = res.data
            console.log(data.data[0].entityId)
            setEntityId(data.data[0].entityId)
            return data
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getWeatherData()
        getHotelDetails()
    },[])

  return (
    <div className="px-20 py-10 flex flex-col gap-10 font-main-font">
    <div className="relative">
        <img className="w-full h-[600px] rounded-2xl" src={cities[cityid].thumbnail} alt="" />
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 text-9xl">
        {cities[cityid].title}
        </h1>
    </div>
    <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-3xl">{cities[cityid].type}</h1>
        <p className="text-lg">{cities[cityid].description}</p>
    </div>
    <div className="flex gap-10 justify-between">
        <div className="w-[40%] flex flex-col gap-10">
            <div>
                <HotelSearchForm
                cityname={cities[cityid].title}
                entityId={entityId}
                />
            </div>
            <div className="">
                <div className="relative">
                    <img className="rounded-2xl" src={mapimage} alt="" />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                    <Link to={`/map?lat=${cities[cityid].latitude}&long=${cities[cityid].longitude}`}>
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 text-2xl border-2 py-2 px-5 rounded-xl">
                        View Map
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="w-[50%]">
            <Weather
            celcius={weatherstat.temp_c}
            fehrenheit={weatherstat.temp_f}
            windspeed={weatherstat.wind_kph}
            winddegree={weatherstat.wind_degree}
            winddirection={weatherstat.wind_dir}
            pressure={weatherstat.pressure_mb}
            humidity={weatherstat.humidity}
            uv={weatherstat.uv}
            />
        </div>
    </div>
    </div>
  )
}

export default CityDetails
