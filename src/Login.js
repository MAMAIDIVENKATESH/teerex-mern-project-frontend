import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from './App';
import {Link, useNavigate } from 'react-router-dom';

import Nav from './Nav'




const Login = () => {
    const [passwordError, setPasswordError] = useState('')
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const navigate=useNavigate()
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }


    const submitHandler = e =>{
        e.preventDefault();
        const fetch=axios.post('http://localhost:5002/login',data).then((res)=>{
            setToken(res.data.token)
            alert("login successfully")
            navigate('/myprofile')
        }).catch((e)=>{
            setPasswordError(e.response.data)
        })
       if(fetch){
        
       }else{
      
        setPasswordError("Please enter valid email and password")
       }
     
        
        }
        

    
      if (token){
       return navigate('/myprofile')
    }
    return (

        <>
        <div className='bodycontainer'>
        <Nav />
            <section className="wrapper ">
                <div className="container ">
                    <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4  ">

                        <form onSubmit={submitHandler} className="rounded bg-white shadow mt-5 p-5 ">
                            <p className="text-dark fw-bolder text-center  mb-4">Welcome to <h1 className='Teeb  mt-1'>Tee<span className='Rex'>Rex</span></h1>  </p>

                            <div className="form-floating mb-3">
                                <input onChange={changeHandler} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={changeHandler} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <p style={{color: 'red', textAlign: 'center'}}>{passwordError}</p>
                                <input onClick={submitHandler} className='formcontrol btn1 mb-3 mt-3' type="submit" value="Login" /><br />
                                <p className='mb-1 mt-4'> Forget password? <Link to="/register" color={'blue.400'}>Sign up</Link></p>
                            </form>
                            
                    </div>
                </div>
            </section>
        </div>
        </>
    
    )
}

export default Login