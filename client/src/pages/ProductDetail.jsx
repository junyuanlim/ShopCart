import React, {useState, useContext, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import {useParams} from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import Sidebar from '../components/Sidebar'
import CartContext from '../context/CartContext'


export default function ProductPage() {

    const {addItem} = useContext(CartContext)

    const {products, getProduct} = useContext(ProductContext)
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await getProduct(id)
            setProduct(fetchedProduct)
        }
        fetchProduct()
    }, [getProduct]) // if getProduct chnages it means that products have been fetched with api so rerun this useeffect to update product

    if (!product) {
        return // error catching if product has not been retreived yet dont try to render because it can cause error with product.image
    }

    const productRating = parseFloat(product.rating.rate) - 1
    const stars = [0, 1, 2, 3, 4].map(star => {
        return (productRating - star >= 1 ? <ion-icon name="star"></ion-icon> : 
        (productRating - star < 1 && productRating - star > 0 ? <ion-icon name="star-half-outline"></ion-icon> : <ion-icon name="star-outline"></ion-icon>))
    })

    return (
        <div>
            <div className="flex justify-end">
                <Sidebar />
            </div>
            <Navbar/>
            <div className='flex max-w-[500px] md:max-w-none mx-auto justify-center'>
                <div className='pt-32 md:flex justify-center'>
                    <div className=' max-w-[500px] md:max-w-none md:min-w-[500px] flex justify-center items-center p-5 mx-auto'>
                        <img className=' shadow-2xl rounded-xl sm:rounded-lg p-5' src={product.image}></img>
                    </div>
                    <div className=' mx-auto p-5'>
                        <p className="text-2xl font-[Poppins] font-semibold">{product.title}</p>
                        <div className='pt-2 text-lg'>${product.price.toFixed(2)}</div>
                        <div className='flex gap-2 items-center pt-2'>
                            <div className='text-indigo-600 pt-1'>{stars}</div>
                            <div className='text-gray-500 text-sm'>({product.rating.count})</div>
                        </div>
                        <div className='pt-2'>{product.description}</div>
                        <div className='pt-5'>
                            <button onClick={()=>addItem(product)}
                                className="w-1/2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Add to Bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}