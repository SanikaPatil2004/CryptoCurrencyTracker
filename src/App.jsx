import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Home/Coin/Coin'
import Footer from './components/Footer/Footer'
import Feature from './pages/Feature/Feature'
import AboutUs from './pages/AboutUs/AboutUs'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/coin/:coinId'element={<Coin/>}/>
      </Routes>
       <Footer/>
    </div>
  )
}

export default App
