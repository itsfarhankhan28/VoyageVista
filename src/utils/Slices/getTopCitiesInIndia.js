import { createSlice } from "@reduxjs/toolkit";
import CitiesData from '../../data/Top_Cities_In_India.json'

const getCitiesData = createSlice({
    name:'topcities',
    initialState:{
        topcitiesarray:CitiesData
    },
    reducer:{

    }
})

export default getCitiesData.reducer