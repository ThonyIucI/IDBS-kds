import { Order, OrderStatus } from '@/schemas'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface stateTypes {
    orders: Order[],
    backupOrders: Order[],
    mainOrder: Order | null
    pendingOrder: boolean
    oderStatuses: OrderStatus[]
    statusSelected: number
}
const initialState: stateTypes = {
    orders: [],
    backupOrders: [],
    mainOrder: null,
    oderStatuses: [
        { id: 1, name: 'Pendiente' },  //->no inicia
        { id: 2, name: 'En proceso' },//->inicia cuando se le da start
        { id: 3, name: 'Completado' },//->finalizado
        { id: 4, name: 'Cancelado' },//->se canceló
    ],
    pendingOrder: false,
    statusSelected: 0

}

export const orderSlice = createSlice({
    initialState,
    name: 'orders',
    reducers: {
        setOrders(state, { payload }: PayloadAction<Order[]>) {
            state.orders = payload
            state.backupOrders = payload
        },
        setMainOrder(state, { payload }: PayloadAction<Order>) {
            state.mainOrder = payload
        },
        setPendingOrder(state, { payload }: PayloadAction<boolean>) {
            state.pendingOrder = payload
        },
        setFilterByStatus(state, { payload }: PayloadAction<number>) {
            state.statusSelected = payload
            if (!payload) state.orders = state.backupOrders
            else state.orders = state.backupOrders.filter((order) => order.statusId === payload)
        },
        setOrderStatus(state, { payload }: PayloadAction<{ orderId: string, newStatusId: number }>) {
            // const oderToChange=state.backupOrders.find((order)=>Number(order.id)===payload.orderId)
            console.log(payload);
            
            const NewOrders = state.backupOrders.map((order) => {
                if (order.id === payload.orderId) {
                    console.log({
                        ...order,
                        endTime:new Date().toISOString(),
                        statusId: payload.newStatusId,
                        status: state.oderStatuses.find(status => status.id === payload.newStatusId)
                    });
                    return {
                        ...order,
                        statusId: payload.newStatusId,
                        status: state.oderStatuses.find(status => status.id === payload.newStatusId)??null
                    }
                   
                    
                }
                return order

            })
            state.orders = NewOrders
            state.backupOrders = NewOrders
        }
    }
})

// : PayloadAction<{ name: string }>
export const { setOrders, setPendingOrder, setMainOrder, setFilterByStatus, setOrderStatus } = orderSlice.actions
export default orderSlice.reducer
