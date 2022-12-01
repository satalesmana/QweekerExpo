import { createSlice } from '@reduxjs/toolkit'


export const messageSlice = createSlice({
    name:'message',
    initialState:{
        data:[
            {message:"Pesan pertama"},
            {message:"Pesan kedua"}
        ]
    },
    reducers:{
        tambahData(state, action){
            state.data.push({message:action.payload})
            
        },
    }
})

export const {  tambahData } = messageSlice.actions
export default messageSlice.reducer
