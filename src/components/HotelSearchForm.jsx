/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom"

const HotelSearchForm = ({cityname,entityId}) => {

    const [checkin,setCheckin] = useState()
    const [checkout,setCheckout] = useState()

  return (
    <div className="shadow-xl rounded-2xl p-3 flex flex-col gap-5">
      <h1 className="font-semibold text-3xl">Search Hotels:-</h1>
        <div className="relative flex gap-5 items-center">
            <label htmlFor="city" className="block font-medium text-gray-700 text-xl">
                City:-
            </label>
            <select
                id="city"
                name="city"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
                defaultValue=""
            >
                <option disabled value="">
                {cityname}
                </option>
            </select>
        </div>
        <div className="flex gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="checkin" className="block font-medium text-gray-700 text-xl">
                Check in date
                </label>
                <input
                type="date"
                id="checkin"
                name="checkin"
                value={checkin}
                onChange={(e)=>setCheckin(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border border-black"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="checkout" className="block font-medium text-gray-700 text-xl">
                Check out date
                </label>
                <input
                type="date"
                id="checkout"
                name="checkout"
                value={checkout}
                onChange={(e)=>setCheckout(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border border-black"
                />
            </div>
        </div>
        <div className="flex justify-center items-center">
            <Link to={`/hoteldetails?cityname=${cityname}&entityId=${entityId}&check-in-date=${checkin}&check-out-date=${checkout}`}>
                <button className="text-white bg-black w-[150px] rounded-xl py-3 font-semibold text-lg">
                    Search
                </button>
            </Link>
        </div>
    </div>
  )
}

export default HotelSearchForm
