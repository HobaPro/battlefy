
import { configureStore } from "@reduxjs/toolkit";
import joinedSlice from "./joinedSlice";

const store = configureStore({
    reducer:{
        joined : joinedSlice.reducer,
       }
})
export default store;