import React, {useContext} from 'react'
import CartContext from '../context/CartContext'

export default function CartItem(props) {

    const {items, price, totalItems, addItem, removeItem, deleteItem} = useContext(CartContext)

    return (
        <div>
            <div className='md:flex p-5'>
                <div className='flex justify-center items-center'>
                    <div className='h-24 w-24 rounded-md border border-gray-200 md:h-full md:p-2'>
                        <img className="h-full w-full object-scale-down" src={props.image}></img>
                    </div>
                </div>
                <div className='pl-2'>
                    <div className='font-[Poppins] font-semibold pt-2'>{props.title}</div>
                    <div className='text-gray-500 pb-2'>${props.totalPrice.toFixed(2)}</div>
                    <div className='flex items-center justify-between'>
                        <span className='flex border p-1 gap-5 justify-center items-center w-24'>
                            <button onClick={()=> removeItem(props)} className='pt-1'><ion-icon name="remove-outline"></ion-icon></button>
                            <span>{props.quantity}</span>
                            <button onClick={()=> addItem(props)} className='pt-1'><ion-icon name="add-outline"></ion-icon></button>
                        </span>
                        <span onClick={()=> deleteItem(props)} className='pt-1 cursor-pointer hover:text-gray-300'><ion-icon name="trash-outline"></ion-icon></span>
                    </div>
                </div>

            </div>
        </div>
    )
}