import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name : "counter",
    initialState : {
        counter : 0
    },
    reducers : {
        incre : (state)=>{
            state.counter +=1
        },
        decre : (state)=>{
            state.counter -=1 
        }
    }
})

const {actions , reducer} = counterSlice

const {incre , decre } = actions

const counterReducer = reducer

export {
    counterReducer,
    incre,
    decre
}

