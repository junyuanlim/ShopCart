import React from "react"
import Navbar from "./components/Navbar"
import Category from "./components/Category"
import CategoryData from "./CategoryData"
import ImageSlider from "./components/ImageSlider"
import Product from "./components/Product"
import { ProductContext } from './context/ProductContext'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home'
import ProductPage from './ProductPage'
import ProductDetail from './pages/ProductDetail'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductPage />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
