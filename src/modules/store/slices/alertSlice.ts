import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type AlertType = {
  on: boolean
  type: 'error' | 'success'
  message: string
}

const initialState: { alert: AlertType } = {
  alert: {
    on: false,
    type: 'error',
    message: ''
  }
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertType>) => {
      state.alert = action.payload
    }
  }
})

export const { setAlert } = alertSlice.actions
export const selectAlert = (state: RootState) => state.alert
export default alertSlice.reducer
