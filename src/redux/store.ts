import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import orderSlice from './slices/orderSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistOrdersConfig = {
    key: 'orders',
    storage,
    whitelist: ['orders','backupOrders','statusSelected']
};
export const store = configureStore({
    reducer: {
        orders: persistReducer<ReturnType<typeof orderSlice>>(
            persistOrdersConfig,
            orderSlice
        )
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false
        })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type Thunk = ThunkAction<
    Promise<unknown>,
    RootState,
    unknown,
    Action<unknown>
>;

export const persistor = persistStore(store)

