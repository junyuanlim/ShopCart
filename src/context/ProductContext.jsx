import React from "react"

export const ProductContext = React.createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const getProduct = (id) => {
        const product = products.find((item) => item.id === Number(id));
        return product;
    };

    console.log(products)

    return <ProductContext.Provider value={{products, getProduct}}>{children}</ProductContext.Provider>
}

export default ProductContext