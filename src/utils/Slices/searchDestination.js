import {createSlice} from '@reduxjs/toolkit'

const searchDestination = createSlice({
    name:'searchdest',
    initialState:{
        searchVal:''
    },
    reducers:{
        searchDest:(state,action)=>{
            state.searchVal = action.payload
        }
    }
})

export const {searchDest} = searchDestination.actions

export default searchDestination.reducer