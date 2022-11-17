import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        id:'',
        name:'',
        email:'',
        username:''
    },
    reducers:{
        setId(state,action){
            state.id = action.payload
        },
        setName(state,action){
            state.name = action.payload
        },
        setEmail(state,action){
            state.email = action.payload
        },
        setUsername(state,action){
            state.username = action.payload
        },
        resetState(state){
            const INITAL_DATA ={
                id:'',
                name:'',
                email:'',
                username:''
            }
            state = {...state, ...INITAL_DATA}
            console.log('state',state)
        }
    }
})

export const { 
    setId,
    setEmail,
    setName,
    setUsername,
    resetState
 } = userSlice.actions

export default userSlice.reducer