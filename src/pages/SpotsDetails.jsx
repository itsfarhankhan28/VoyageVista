import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Carousel from "../components/Swiper/Carousel"
import Video from "../components/Video/Video"
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaMap } from "react-icons/fa6";

const SpotsDetails = () => {
    const params = useParams()
    const id = params.id

    const SpotDetails = useSelector((store)=>store.getData.allspots)
    console.log(SpotDetails[id].images)

  return (
    <div className="py-20 w-screen flex justify-center flex-col gap-5">
      <div className="flex gap-5 justify-center">
        <div className="w-[25%]">
            <Carousel 
            image1={`${SpotDetails[id].images[0]}`}
            image2={`${SpotDetails[id].images[1]}`}
            />
        </div>
        <div className="">
            <Video
            video={`${SpotDetails[id].video}`}
            />
        </div>
      </div>
      <div className=" flex justify-start mx-52 flex-col gap-10">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="font-semibold text-5xl">{SpotDetails[id].name}</h1>
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-3xl flex gap-2 justify-center items-center"><FaMapLocationDot/>
              <span className="text-lg">{SpotDetails[id].location.country}</span>
            </div>
            <div className="text-3xl flex gap-2 justify-center items-center"><FaCity/>
              <span className="text-lg">{SpotDetails[id].location.city}</span>
            </div>
          </div>
        </div>
        <div className="text-3xl flex gap-2 items-center"><HiMiniInformationCircle/>
          <span className="font-semibold text-lg">{SpotDetails[id].description}</span>
        </div>
        <div>
          <p className="text-2xl">Activities:- 
            <span className="font-semibold text-lg">{SpotDetails[id].activities[0]}</span>, 
            <span className="font-semibold text-lg">{SpotDetails[id].activities[1]}</span>,
            <span className="font-semibold text-lg">{SpotDetails[id].activities[2]}</span>
          </p>
        </div>
        <div className="flex justify-center">
          <Link to={`/map?lat=${SpotDetails[id].location.geopoint._lat}&long=${SpotDetails[id].location.geopoint._long}`}>
            <button className="px-7 py-3 border border-black font-semibold rounded-xl flex gap-2">
              <span className="text-2xl"><FaMap/></span>View Map
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SpotsDetails
