import { Order } from '@/schemas'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface stateTypes {
    orders: Order[],
    mainOrder:Order|null
    pendingOrder:boolean
}
const initialState: stateTypes = {
    orders: [],
    mainOrder: null,
    pendingOrder: false

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
        },
        setPendingOrder(state, { payload }: PayloadAction<boolean>) {
            state.pendingOrder = payload
        }
    }
})

// : PayloadAction<{ name: string }>
export const { setOrders, setPendingOrder,setMainOrder } = orderSlice.actions
export default orderSlice.reducer
