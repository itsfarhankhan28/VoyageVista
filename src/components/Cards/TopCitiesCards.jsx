/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const TopCitiesCards = ({id,thumbnail,title,type,entity_type}) => {
  return (
    <div className='flex flex-col w-[330px] h-[370px] rounded-xl p-3 shadow-xl'>
        <div className='h-[60%]'>
            <img className='h-full w-full rounded-xl' src={thumbnail} alt="" />
        </div>
        <div className='h-[40%] p-1 flex flex-col gap-1'>
            <h1 className='font-semibold text-xl'><span>{title}</span></h1>
            <h1 className='font-semibold text-xl'><span className='font-normal text-lg'>{type}</span></h1>
            <h1 className='font-semibold text-xl'><span className='font-normal text-lg'>{entity_type}</span></h1>
            <div className='flex justify-center items-center'>
                <Link to={`/citydetails/${id}`}>
                <button className='w-[150px] bg-black text-white py-2 rounded-lg'>
                    More Info
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TopCitiesCards
