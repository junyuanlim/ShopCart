import React from "react"
import Navbar from "./components/Navbar"
import Category from "./components/Category"
import CategoryData from "./CategoryData"
import ImageSlider from "./components/ImageSlider"
import Product from "./components/Product"
import { ProductContext } from './context/ProductContext'
import {Menu} from 'antd'
import { Outlet, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { SideBarContext } from './context/SideBarContext'

export default function Home() {

  const { isOpen, setIsOpen, handleClose } = React.useContext(SideBarContext)

  const categoryCards = CategoryData.map(item => {
    return (<Category 
      key = {item.id}
      type = {item.type}
      imageUrl = {item.imageUrl}
    />)
  })

  const {products} = React.useContext(ProductContext)
  const productCard = products.map(item => {
    return (<Product
      key= {item.id}
      {...item}
    />)
  })



  return (
    <div className="w-screen h-screen">
      <div className="flex justify-end">
        <Sidebar />
      </div>
        <div className={`${isOpen ? "opacity-50" : ""}`}>
        <Navbar/>
        <ImageSlider/>
        <div className="pt-24 px-10">
            <h3 className="font-[Poppins] text-3xl text-gray-800">Shop Our Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
                {categoryCards}
            </div>
        </div>
        <h3 className="pt-24 px-10 font-[Poppins] text-3xl text-gray-800">Featured Items</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10">
            {productCard}
        </div>
      </div>
    </div>
  )
    
}