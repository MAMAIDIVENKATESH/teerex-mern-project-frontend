import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

const Home = () => {
  let navigate = useNavigate()


  useEffect(() => {
    let token = Cookies.get('token')
  if(!token){
    return navigate('/login')
  }
   })

  

 
  return (
    <> 
    </>
  )
}

export default Home


