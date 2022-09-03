import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import cardsReducer from './slices/cardsSlice'

const rootReducer = combineReducers({
  cards: cardsReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['cards/setCards'],
          ignoredActionPaths: ['payload', 'cards.cards'],
          ignoredPaths: ['cards.cards']
        }
      })
  })

  return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
