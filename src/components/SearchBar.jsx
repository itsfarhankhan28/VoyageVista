/* eslint-disable no-unused-vars */
// SearchBar.js
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { searchDest } from "../utils/Slices/searchDestination";

const SearchBar = () => {

  const [searchVal,setSearchVal] = useState()

  const dispatch = useDispatch()

  // const searchValue = useSelector((store)=>store.searchDest.searchVal)

  useEffect(()=>{
    dispatch(searchDest(searchVal))
  },[dispatch,searchVal])

  return (
    <div className="w-full mx-auto mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchVal}
          onChange={(e)=>setSearchVal(e.target.value)}
          className="block w-full py-2 pl-10 pr-12 leading-tight bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:border-blue-400 focus:shadow-outline"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
