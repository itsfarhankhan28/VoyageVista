import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";

export const getTopDestinationSpots = createAsyncThunk('/gettopspots',async()=>{
    try{
        const querySnapshot = await getDocs(collection(db,"TopDestinations"));
        const topdestinationsarray = []
        querySnapshot.forEach((doc)=>{
            topdestinationsarray.push(doc.data());
        })
        console.log(topdestinationsarray)
        return topdestinationsarray
    }catch(err){
        console.log(err)
    }
})

const getTopSpots = createSlice({
    name:'gettopspots',
    initialState:{
        alltopspots:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(getTopDestinationSpots.pending,(state)=>{
            state.status = 'pending'
        }),
        builder.addCase(getTopDestinationSpots.fulfilled,(state,action)=>{
            state.status = 'fulfilled',
            state.alltopspots = action.payload
        }),
        builder.addCase(getTopDestinationSpots.rejected,(state)=>{
            state.status = 'rejected'
        })
    }
})

export default getTopSpots.reducer