

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { CartState } from '../context/context';


import React,{useContext,useState,useEffect} from 'react'
import {store} from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './style.css'



const TopNav = () => {
    const [token,setToken]=useContext(store)
    const [data,setData]=useState(null)
    const { state: { cart } } = CartState()
    const navigate=useNavigate()

    useEffect(()=>{
       axios.get('https://teerex-mern-project-backend.vercel.app/myprofile',{
           headers:{
               'x-token':token
           }
       }).then(res=>setData(res.data)).catch((err)=>console.log(err))
   },[])

   if(!token){
       return navigate('/login')
   }

    return (
     <>
      {data && 
        <nav className='nav-container shadow mr-1'>
            <div className='nav-inner'>
                <div className='flex-cnt'>
                    <Link to="/myprofile" className='link'>
                        <div className="logo">TeeRex <span>Store</span></div>
                    </Link>
                    

                </div>
                <ul className='menus'>
                <li className='text-primary'>{data.username}</li>
                    <Link to="/" className='link'>
                        <li  className='btn btn-outline-primary'>Products</li>
                    </Link>
                    <Link to="/cart" className='link'>
                        <li className='cart-icon'>
                            {
                                cart.length ? <div className='cart-count'>{cart.length}</div> : null
                            }
                            <AiOutlineShoppingCart />
                        </li>
                    </Link>
                    <Link to='/login'>
                                <button className='btn btn-outline-primary' onClick={() => { setToken(null); } }>logout</button>
                            </Link>
                </ul>
            </div>
        </nav>
                
      }
        </>
       
    )

}

export default TopNav