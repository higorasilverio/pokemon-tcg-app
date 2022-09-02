import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../modules/store/store'

export const useAppDispatch: () => AppDispatch = useDispatch
