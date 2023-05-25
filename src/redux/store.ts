import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './slices/orderSlice'

export const store = configureStore({
    // devTools: true,
    reducer: {
        orders: orderSlice
       
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

