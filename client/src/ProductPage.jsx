import React from 'react'
import Navbar from './components/Navbar'
import { ProductContext } from './context/ProductContext'
import Product from "./components/Product"

export default function ProductPage() {
    const {products} = React.useContext(ProductContext)

    const productCard = products.map(item => {
        return (<Product
        key= {item.id}
        {...item}
        />)
    })

    return (
        <div>
            <Navbar/>
            <h3 className="pt-24 px-10 font-[Poppins] text-3xl text-gray-800">Featured Items</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10">
                {productCard}
            </div>
        </div>
    )
}