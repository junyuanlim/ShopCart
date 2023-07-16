import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import {CartContext} from '../context/CartContext'
import { SideBarContext } from '../context/SideBarContext'

export default function Sidebar() {

    const { isOpen, setIsOpen, handleClose } = useContext(SideBarContext)
    const {totalItems, items, subTotalPrice} = useContext(CartContext)

    const cartItemArray = Object.values(items)
    const cartItems = cartItemArray.map((item) => {
        return (<CartItem 
            key = {item}
            {...item}
        />)
    })

    return (
        <div className={`shadow-2xl h-full w-1/2 bg-white md:w-1/3 z-30 fixed ${isOpen ? 'opacity-100 right-0' : 'right-[-480px]'}
        transition-all ease-in duration-500 overflow-y-auto`}>
            <div className='p-5 shadow-md'>Shopping Bag ({totalItems})</div>
            <div className="absolute text-3xl top-0 right-0 p-3 cursor-pointer text-gray-800 hover:text-gray-300">
                <ion-icon onClick={handleClose} name="close-circle-outline"></ion-icon>
            </div>
            <div>
                {cartItems}
            </div>
            {
            totalItems !== 0 ?
                <div className='shadow-inner bottom-0 w-full bg-white'>
                    <div className='p-5'>
                        <div className='text-gray-500'>Total: ${subTotalPrice.toFixed(2)}</div>
                        <div className='flex justify-center w-full pt-2'>
                            <button
                                className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}