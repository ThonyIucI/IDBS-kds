import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface stateTypes {
    message: string
    show: boolean
    color: 'success' | 'error'
}
const initialState: stateTypes = {
    message: "",
    show: false,
    color: 'success'

}

export const assetsSlice = createSlice({
    initialState,
    name: 'orders',
    reducers: {
        setAlert(state, { payload }: PayloadAction<stateTypes>) {
            state.message = payload.message
            state.show = payload.show
            state.color = payload.color
        }
    }
})

export const { setAlert } = assetsSlice.actions
export default assetsSlice.reducer
