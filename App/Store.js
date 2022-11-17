import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterReducer'
import UserReducer from './reducers/UserReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user:UserReducer
  }
})