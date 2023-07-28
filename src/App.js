import React,{useState,createContext} from 'react'
import {Routes,Route} from 'react-router-dom'


import Register from './Register'
import Login from './Login'
import Myprofile from './Myprofile'
import Cart from './TeeRex/pages/Cart';
import './App.css'

import Home from './home'
export const store=createContext();


const App = () => {
  const [token,setToken]=useState(null);
  return (
    <div>
  
    <store.Provider value={[token,setToken]}>
   
       
      <Routes>
    
       
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/myprofile" element ={<Myprofile />} />
      </Routes>
   
      </store.Provider>
    </div>
  )
}

export default App
