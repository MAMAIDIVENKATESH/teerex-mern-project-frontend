
import React from 'react'
import Products from './TeeRex/pages/Products'
import TopNav from './TeeRex/components/TopNav'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Myprofile = () => {
  const navigate = useNavigate()
  const token = Cookies.get('token')

useEffect(() => {
  

  if (token === undefined){
  return navigate('/login')
  }
})





console.log(token)
  return (
    <div>
      <TopNav />
      <Products />
    </div>
  )
}

export default Myprofile

