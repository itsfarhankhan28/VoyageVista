import { useSelector } from 'react-redux'
import { FaArrowRight } from "react-icons/fa";
import TopCitiesCards from '../components/Cards/TopCitiesCards';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';

const TopCitiesInIndia = () => {

    const cities = useSelector((store)=>store.gettopcities.topcitiesarray)
    console.log(cities)

  return (
    <div className='font-main-font flex justify-center items-center mx-auto w-[1500px]'>
        <div className=' p-5 flex flex-col gap-5'>
            <div className='flex gap-2 items-center'>
                <h1 className='text-semibold text-4xl'>Top Cities In India</h1>
                <span className='text-2xl'><FaArrowRight/></span>
            </div>
            <div className=' flex gap-7 flex-wrap'>
                    {cities.map((data)=>{
                    return(
                        <>
                        <TopCitiesCards
                        id={data.id}
                        thumbnail={data.thumbnail}
                        title={data.title}
                        type={data.type}
                        entity_type={data.entity_type}
                        />
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default TopCitiesInIndia
