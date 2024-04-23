import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./Slices/getDataSlice";
import getTopDestinationData from "./Slices/getTopDestinationData";
import getTopCitiesInIndia from "./Slices/getTopCitiesInIndia";
import searchDestination from "./Slices/searchDestination";

const store = configureStore({
    reducer:{
        getData:getDataSlice,
        getTopSpots:getTopDestinationData,
        gettopcities:getTopCitiesInIndia,
        searchDest:searchDestination
    }
})

export default store