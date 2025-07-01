import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../src/fatures/counter/couneter";

const store = configureStore({
    reducer :{
      counter :  counterReducer,
    }
})

export {store}