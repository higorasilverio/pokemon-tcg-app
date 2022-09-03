import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../models/Card'
import { RootState } from '../store'

const initialState = {
  cards: [] as Card[]
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload
    }
  }
})

export const { setCards } = cardsSlice.actions
export const selectCard = (state: RootState) => state
export default cardsSlice.reducer
