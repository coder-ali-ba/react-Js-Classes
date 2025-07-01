import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name :'counter',
    initialState :{
        counter :0  
    },
    reducers:{
        addCounter : (state) => {
          state.counter +=1
        },
        minusCounter : (state) => {
          state.counter -=1
        }

    }

})


 const counterReducer = counterSlice.reducer

const {addCounter , minusCounter} = counterSlice.actions

export {counterReducer , addCounter , minusCounter }
