import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Home/Coin/Coin'
import Footer from './components/Footer/Footer'
import Reccomend from './pages/Reccomendation/Reccomend'
// import Feature from ''

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/reccomend' element={<Reccomend/>}/>
        {/* <Route path='/feature' element={<Feature/>}/> */}
        <Route path='/coin/:coinId'element={<Coin/>}/>
      </Routes>
       <Footer/>
    </div>
  )
}

export default App
