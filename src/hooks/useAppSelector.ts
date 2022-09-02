import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../modules/store/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
