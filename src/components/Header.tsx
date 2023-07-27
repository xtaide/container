import React from 'react'
//@ts-ignore
import {useStore} from 'store/store'
import './Header.css'
export const Header:React.FC = () => {
    const {count} = useStore()
    return (
        <div className='header'>Counter: {count }</div>
    )
}

