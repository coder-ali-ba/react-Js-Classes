import { createSlice } from "@reduxjs/toolkit";

 const cardSlice = createSlice({
    name : "cards",
    initialState : [],
    reducers :{
      setCardItems : (state , action)=>{
        return action.payload
      }
    }
 })

 const {actions , reducer} = cardSlice
 const {setCardItems} = actions
const cardReducer = reducer
 export {
    cardReducer,
    setCardItems
 }