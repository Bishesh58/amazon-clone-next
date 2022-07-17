import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './slices/basketSlice'

//create store with reducer object.
export const store = configureStore({
  reducer: {
    basket: basketSlice
  },
})