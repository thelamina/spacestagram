import { useContext } from 'react'
import { PhotoContext } from '../context/photo/provider'

export const useFav = () => {
    return useContext(PhotoContext)
}
