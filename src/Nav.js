import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { store } from './App'
const Nav = () => {
    const [token,setToken]=useContext(store)
    console.log(setToken)
  return (
    <div>
    {!token &&
           
      <nav class="shadow bg-transparent rounded navbar navbar-expand-lg navbar-bg-transparent bg-transparent">
  <div class="container-fluid">
    <h1 className='Tee'>Tee<span className='Rex'>Rex</span></h1>
    
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  ">
        <li className='nav-but'>
         <Link to='/register' className='btn btn-outline-light ' href="#">SignUp</Link>
      </li>
      <li className='nav-but'>
         <Link to='/login' className='btn btn-outline-light' href="#">Login</Link>
      </li>
     </ul>
    </div>
  </div>
</nav>
    } 
    
    </div>

  )
}

export default Nav
