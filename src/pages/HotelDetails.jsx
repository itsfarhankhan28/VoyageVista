import { useSearchParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"

const HotelDetails = () => {

    // const [city,setCity] = useState()
    const [hoteldetails,setHoteldetails] = useState()

    const [searchParams] = useSearchParams()
    const cityname = searchParams.get('cityname')
    // setCity(cityname)
    const entityId = searchParams.get('entityId')
    const checkin = searchParams.get('check-in-date')
    const checkout = searchParams.get('check-out-date')
    // console.log(cityname,entityId,checkin,checkout)


    const options = {
        method: 'GET',
        url: 'https://skyscanner80.p.rapidapi.com/api/v1/hotels/search',
        params: {
          entityId: `${entityId}`,
          checkin: `${checkin}`,
          checkout: `${checkout}`,
          rooms: '1',
          adults: '1',
          resultsPerPage: '15',
          page: '1',
          currency: 'USD',
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
            setHoteldetails(data)
            return data
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getHotelDetails()
    },[])

  return (
    <div className="py-10 px-5 font-main-font flex flex-col gap-10">
        <div>
            <h1 className="font-semibold text-5xl">Hotels in {cityname}:-</h1>
        </div>
        <div className="flex gap-5 flex-wrap">
            {hoteldetails?.data?.results?.hotelCards?.map((data)=>{
                return (
                    <>
                    <div className="w-[350px] h-[300px] p-3 flex flex-col gap-2 rounded-2xl shadow-xl">
                        <div className="h-[60%]">
                            <img className="w-full h-full rounded-xl" src={data.images[0]} alt="" />
                        </div>
                        <div className="h-[60%] flex flex-col gap-1">
                            <h1 className="font-semibold text-lg">{data.name}</h1>
                            <div className="flex gap-5">
                                <h1 className="font-semibold">Ratings - <span>{data.stars}</span></h1>
                                <h1 className="font-semibold">Lowest Price - <span className="font-normal">{data.lowestPrice.price}</span></h1>
                            </div>
                            <h1>{data.distance}</h1>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default HotelDetails
