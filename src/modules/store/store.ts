import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import alertReducer from './slices/alertSlice'

const rootReducer = combineReducers({
  alert: alertReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState
  })

  return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
