import { Order } from '@/schemas'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface stateTypes {
    orders: Order[],
    mainOrder:Order|null
}
const initialState: stateTypes = {
    orders: [],
    mainOrder: null
}

export const orderSlice = createSlice({
    initialState,
    name: 'orders',
    reducers: {
        setOrders(state, { payload }: PayloadAction<Order[]>) {
            state.orders = payload
        },
        setMainOrder(state, { payload }: PayloadAction<Order>) {
            state.mainOrder = payload
        }
    }
})

// : PayloadAction<{ name: string }>
export const { setOrders } = orderSlice.actions
export default orderSlice.reducer
