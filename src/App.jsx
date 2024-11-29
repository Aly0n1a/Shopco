import "./App.css"
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NewArrians from './pages/NewArrians'
import OnSale from './pages/OnSale'
import Header from './companents/Header/Header'
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Footer from "./companents/Footer/Footer"

const App = () => {
  return (
<>
<Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/shop' element={<Shop/>} />
  <Route path='/newarrians' element={<NewArrians/>} />
  <Route path='/onsale' element={<OnSale/>} />
  <Route path="/product/:id" element={<Product/>}/>

</Routes>
<Footer/>


</>
  )
}

export default App