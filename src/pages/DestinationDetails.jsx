import axios from "axios"
import { useParams,useSearchParams } from "react-router-dom";
import { useEffect,useState } from "react";

const DestinationDetails = () => {

    const [destinationdetails,setDestinationdetails] = useState()

    const [searchParams] = useSearchParams()
    const cityname = searchParams.get('cityname')

    const params = useParams()
    const destinationId = params.id

    const encodedParams = new URLSearchParams();
    encodedParams.set('location_id', `${destinationId}`);
    encodedParams.set('language', 'en_US');
    encodedParams.set('currency', 'USD');
    encodedParams.set('offset', '0');

    const options = {
    method: 'POST',
    url: 'https://tourist-attraction.p.rapidapi.com/search',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '408bfd43d1msh81efb1f570bcd88p1934d1jsnebf68378b693',
        'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
    },
    data: encodedParams,
    };

    const getDestinationDetails = async()=>{
        try{
            const res = await axios.request(options)
            const data = res.data
            console.log(data)
            setDestinationdetails(data)
            return data
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getDestinationDetails()
    },[])

  return (  
    <div className="p-5 flex flex-col gap-10">
        <div>
            <h1 className="font-semibold text-4xl">Popular Destinations in {cityname}:-</h1>
        </div>
        <div className="flex flex-wrap gap-5">
            {destinationdetails?.results?.data.map((data)=>{
                return (
                    <>
                    <div className="w-[350px] h-[300px] rounded-2xl shadow-xl p-3 flex flex-col gap-2">
                        <div className="h-[60%]">
                            <img className="w-full h-full rounded-xl" src={data.photo.images.medium.url} alt="" />
                        </div>
                        <div className="h-[40%] flex flex-col gap-2">
                            <h1 className="font-semibold text-lg">{data.name}</h1>
                            <div className="flex justify-between">
                                <h1 className="font-semibold">{data.rating}</h1>
                                <h1>{data.ranking}</h1>
                            </div>
                            <h1 className="font-semibold">{data.open_now_text}</h1>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default DestinationDetails
