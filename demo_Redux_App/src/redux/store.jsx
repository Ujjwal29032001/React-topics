import {configureStore} from "@reduxjs/toolkit";
import sliceData from './slice.jsx'

const store = configureStore({
    reducer:{
        userData:sliceData

        
    }
})
export default store;