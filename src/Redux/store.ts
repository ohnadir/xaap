import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cartReducers'
export default configureStore({
    reducer:{
        cart:CartReducer
    }
})