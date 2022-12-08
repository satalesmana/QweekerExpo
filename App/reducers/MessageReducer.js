import { createSlice } from '@reduxjs/toolkit'


export const messageSlice = createSlice({
    name:'message',
    initialState:{
        data:[]
    },
    reducers:{
        addMultipeData(state, action){
            state.data=action.payload
        },
        tambahData(state, action){
            state.data.push(action.payload)
        },
        deleteMessage(state, action){
            const newData = state.data.filter(item => item.message != action.payload);
            state.data = newData
        }
    }
})

export const {  tambahData, deleteMessage, addMultipeData } = messageSlice.actions
export default messageSlice.reducer
