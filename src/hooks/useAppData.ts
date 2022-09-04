import { useContext } from 'react'
import AppContext from '../modules/context/AppContext'

const useAppData = () => useContext(AppContext)

export default useAppData
