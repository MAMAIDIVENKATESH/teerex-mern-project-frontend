import React,{useState} from 'react'
import axios from 'axios';
import Nav from './Nav'



import { Link,useNavigate } from 'react-router-dom';



const Register = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const [passwordError, setPasswordError] = useState('')
    const navigate=useNavigate()
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = async e =>{
        e.preventDefault();

        if (data.password !== data.confirmpassword){
            
            setPasswordError('Password Not Matched')
        }else{
           await axios.post('http://localhost:5002/register',data).then((res) => {
                alert(res.data)
                navigate('/login')
               
            }).catch((e) => {
                
               alert(e.response.data)
              
               
            })
        }
        

    }
    return (
        
        
        <div className='bodycontainer '>
       
        <Nav />
<section className="wrapper  ">
		<div className="container ">
			<div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4  ">
				
				<form onSubmit={submitHandler} className="  rounded bg-white mt-4  shadow p-5 ">
					<h3 className="text-dark fw-bolder fs-4 mb-2">Create an Account</h3>

					<div className="fw-normal text-muted mb-2">
						Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Sign in here</Link>
					</div>

                    
                    <div className="form-floating mb-3">
                        <input onChange={changeHandler}  name="username" type="text" className="form-control" id="floatingFirstName" placeholder="name@example.com"/>
                        <label for="floatingFirstName">First Name</label>
                    </div>
                     
					<div className="form-floating mb-3">
						<input onChange={changeHandler} name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
						<label for="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input onChange={changeHandler} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
						<label for="floatingPassword">Password</label>

					</div> 
                    <div className="form-floating mb-3">
						<input onChange={changeHandler} name="confirmpassword"  type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
						<label for="floatingPassword">Confirm Password</label>
					</div> 
                    
                    
                    <input onClick={submitHandler} className='formcontrol btn1 mb-3 mt-3' type="submit" value="Register" /><br />
                
                    <p style={{color: 'red', textAlign: 'center'}}>{passwordError}</p>
                    <div>
                <h1 className='Teeb text-center mt-1'>Tee<span className='Rex'>Rex</span></h1>
               
                </div>
                </form>
               
			</div>
		</div>
	</section>
    
          </div>  
        
    )
}

export default Register