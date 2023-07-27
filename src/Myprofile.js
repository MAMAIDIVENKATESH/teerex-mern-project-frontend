
import React from 'react'
import Products from './TeeRex/pages/Products'
import TopNav from './TeeRex/components/TopNav'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const Myprofile = () => {
  const navigate = useNavigate()
const token = Cookies.get('token')

if (!token){
return navigate('/login')
}

console.log(token)
  return (
    <div>
      <TopNav />
      <Products />
    </div>
  )
}

export default Myprofile

