import axios from 'axios'
import SearchBar from '../components/SearchBar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {

  const [destinationdetails,setDestinationdetails] = useState()

  const searchVal = useSelector((store)=>store.searchDest.searchVal)

  const encodedParams = new URLSearchParams();
  encodedParams.set('q', `${searchVal}`);
  encodedParams.set('language', 'en_US');

  const options = {
    method: 'POST',
    url: 'https://tourist-attraction.p.rapidapi.com/typeahead',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '408bfd43d1msh81efb1f570bcd88p1934d1jsnebf68378b693',
      'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
    },
    data: encodedParams,
  };

  const HandleOnSubmit = async()=>{
    try{
      const res = await axios.request(options)
      const data = res.data
      // console.log(data)
      setDestinationdetails(data)
      return data
    }catch(err){
      console.log(err)
    }
  }

  console.log(destinationdetails)

  return (
    <>
    <div className='p-10 font-main-font flex flex-col gap-10'>
      <div className='flex gap-1 items-end'>
        <SearchBar/>
        <button
          onClick={()=>HandleOnSubmit()}
          type="button"
          className="py-2 px-4 text-white bg-blue-500 rounded-md shadow-md focus:outline-none hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
      {destinationdetails 
      && 
      destinationdetails?.results?.data.map((data)=>{
        return(
        <>
        <Link to={`/destinationdetails/${data.result_object.location_id}?cityname=${data.result_object.name}`}>
          <div className='flex flex-col gap-2 p-3 w-[350px] h-[300px] rounded-2xl shadow-xl'>
            <div className='h-[60%]'>
              <img className='w-full h-full rounded-xl' src={data.result_object.photo.images.medium.url} alt="" />
            </div>
            <div className='h-[40%] flex flex-col gap-2'>
              <h1 className='font-semibold text-xl'>{data.result_object.name}</h1>
              <h1 className='font-semibold'>Location:- <span className='font-normal'>{data.result_object.location_string}</span></h1>
              <h1 className='font-semibold'>TimeZone:- <span className='font-normal'>{data.result_object.timezone}</span></h1>
            </div>
          </div>
        </Link>
        </>
        )
      })
      }
      </div>
      {/* <div>
        <h1 className='font-semibold text-9xl text-gray-300'>Search For Destinations...</h1>
      </div> */}
    </div>
    </>
  );
};

export default Destinations;
