import { useSelector,useDispatch } from 'react-redux'
import { getAllSpots } from '../utils/Slices/getDataSlice'
import { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'
import SpotsCard from '../components/Cards/SpotsCard'

const TravelSpot = () => {

   const dispatch = useDispatch()

    const AllSpots = useSelector((store)=>store.getData.searchedspots)
    console.log(AllSpots)

    useEffect(()=>{
        dispatch(getAllSpots())
    },[])

    return (
        <>
        <div className='flex justify-between items-center flex-col gap-5'>
            <div className='text-3xl font-bold'>Travel Spots</div>
            <div className='flex gap-10'>
                <SearchBar/>
                <Filter/>
            </div>
            <div className='w-[1000px] p-5'>
                <div className='flex flex-wrap gap-10'>
                {AllSpots.map((data)=>{
                    // console.log(data)
                    return (
                        <>
                        <Link to={`/spots/${data.id}`}>
                            <SpotsCard
                            thumbnail={`${data.thumbnail}`}
                            name={`${data.name}`}
                            city={`${data.location.city}`}
                            country={`${data.location.country}`}
                            />
                        </Link>
                        </>
                    )
                })}
                </div>
            </div> 
        </div>
        </>
    )
}

export default TravelSpot