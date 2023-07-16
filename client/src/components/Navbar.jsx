import React from "react"
import Button from "../Button"
import { Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { SideBarContext } from '../context/SideBarContext'
import {CartContext} from '../context/CartContext'

export default function Navbar() {

    const { isOpen, setIsOpen, handleClose } = React.useContext(SideBarContext)
    const {totalItems} = React.useContext(CartContext)

    let links=[
        {name:"CATEGORY", link:"/"},
        {name:"DEALS", link:"/"},
        {name:"DELIVERY", link:"/"},
    ];
    let [open,setOpen] = React.useState(false)
    return (
        
        <div className="shadow-md w-full fixed top-0 left-0 z-20">
            <div className="bg-white md:flex pt-3 pb-3 md:px-10 items-center justify-between">
                
                    <div className="flex font-bold cursor-pointer items-center font-[Poppins] text-gray-800 text-3xl px-3">
                            <span className="text-4xl text-indigo-600 mr-1 pt-3">
                            <ion-icon name="pricetags-outline"></ion-icon>
                            </span>
                            
                            <Link to="/">ShopCart</Link>
        
                    </div>
                    <div className="hidden md:flex items-center md:opacity-100 opacity-0 relative">
                        <input placeholder="Search Product" className="bg-gray-100 rounded-lg p-2" />
                        <span className="pt-1 hover:text-gray-300 cursor-pointer absolute right-3">
                            <ion-icon name="search-outline"></ion-icon>
                        </span>
                    </div>

                
                <span onClick={() => setOpen(prevOpen => !prevOpen)} className="text-4xl md:hidden absolute right-8 top-6 cursor-pointer">
                    <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
                </span>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static z-[-1] md:z-auto bg-white w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in  
                ${open ? 'opacity-100 top-20' : 'top-[-490px]'} md:opacity-100`}>
                    {links.map((Link) => (
                            <li key={Link.name} className="md:ml-5 text-lg md:my-0 my-7 font-[Poppins]">
                                <div className="text-gray-800 hover:text-gray-300 duration-300">{Link.name}</div>
                            </li>
                        ))
                    }
                        <div onClick={() => setIsOpen(true)}
                            className="flex font-bold cursor-pointer items-center font-[Poppins] text-gray-800 text-lg pt-5 md:pt-0 md:pl-5 relative group">
                                <div className="flex group-hover:text-gray-300">
                                    <span className="pt-1 mr-1">
                                    <ion-icon name="cart-outline"></ion-icon>
                                    </span>
                                    <div>Cart</div>
                                    <span className={`text-indigo-600 absolute md:top-0 md:left-7 left-2 text-sm group-hover:text-indigo-300`}>
                                        <ion-icon className="" name="ellipse"></ion-icon>
                                        <span className="absolute text-white text-xs right-1">{totalItems}</span>
                                    </span>
                                </div>
                        </div>
                        <div className="flex font-bold cursor-pointer items-center font-[Poppins] text-gray-800 text-lg pt-5 md:pt-0 md:pl-5 hover:text-gray-300">
                                <span className="pt-1 mr-1">
                                <ion-icon name="person-outline"></ion-icon>
                                </span>
                                <div>Account</div>
                        </div>
                </ul>
            </div>
        </div>
    
    )
}

