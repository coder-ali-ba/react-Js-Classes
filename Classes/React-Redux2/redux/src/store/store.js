import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "../Slices/cardSlice";
import { counterReducer } from "../Slices/Slices";

const store = configureStore({
    reducer:{
      counter : counterReducer,
      card : cardReducer
    }
})

export default store