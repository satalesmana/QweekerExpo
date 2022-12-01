import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterReducer'
import UserReducer from './reducers/UserReducer'
import messageReducer from './reducers/MessageReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user:UserReducer,
    message:messageReducer
  }
})