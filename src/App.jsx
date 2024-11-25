import "./App.css"
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NewArrians from './pages/NewArrians'
import OnSale from './pages/OnSale'
import Header from './companents/Header/Header'

const App = () => {
  return (
<>
<Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/NewArrians' element={<NewArrians/>} />
  <Route path='/OnSale' element={<OnSale/>} />

</Routes>



</>
  )
}

export default App