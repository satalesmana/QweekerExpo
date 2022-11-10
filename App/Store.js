import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterReducer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})