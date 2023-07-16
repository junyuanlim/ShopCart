import { createContext, useState, useEffect } from 'react'
import ProductContext from './ProductContext'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [items, setItems] = useState({})
    const [price, setPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [subTotalPrice, setSubTotalPrice] = useState(0)

    useEffect(() => {
        const itemArray = Object.values(items)
        const newTotalItems = itemArray.reduce((total, item) => total + item.quantity, 0)
        setTotalItems(newTotalItems)

    }, [items]);

    useEffect(() => {
        const itemArray = Object.values(items)
        const newTotalPrice = itemArray.reduce((total, item) => total + item.totalPrice, 0)
        setSubTotalPrice(newTotalPrice)
    }, [items])

    useEffect(() => {
        console.log(totalItems)
        console.log(items);
    }, [totalItems])

    const addItem = (product) => {
        setItems((prevItems) => {
            const existingItem = prevItems[product.id]
            const updatedItem = {
                ...product,
                quantity: existingItem ? existingItem.quantity + 1: 1,
                totalPrice: existingItem ? existingItem.totalPrice + existingItem.price: product.price,
            }
            return { ...prevItems, 
                [product.id]: updatedItem
            };
        });
      };
    
    const removeItem = (product) => {
        setItems((prevItems) => {
            const existingItem = prevItems[product.id]
            const updatedItem = {
                ...product,
                quantity: existingItem.quantity - 1,
                totalPrice: existingItem.totalPrice - existingItem.price
            }
            let newItems = {...prevItems, [product.id]:updatedItem}
            if (updatedItem.quantity <= 0) {
                const {[product.id]:updatedItem, ...items} = {...prevItems}
                return items
            } 
            return newItems;
        });
    };

    const deleteItem = (product) => {
        setItems((prevItems) => {
            const existingItem = prevItems[product.id]
            const {[product.id]:updatedItem, ...items} = {...prevItems}
            return items
        })
    }

    /*
        check that if item is already in cart then add to num
    */ 

    return <CartContext.Provider value={{items, price, totalItems, subTotalPrice, addItem, removeItem, deleteItem}}>{children}</CartContext.Provider>
}

export default CartContext