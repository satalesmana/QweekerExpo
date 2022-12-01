import { createSlice } from '@reduxjs/toolkit'


export const messageSlice = createSlice({
    name:'message',
    initialState:{
        data:[]
    },
    reducers:{
        tambahData(state, action){
            state.data.push(action.payload)
        },
    }
})

export const {  tambahData } = messageSlice.actions
export default messageSlice.reducer
