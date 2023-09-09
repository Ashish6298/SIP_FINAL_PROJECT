import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/Style.css"
import "../../styles/Login.css"

const Login = () => {
  return (
    <div className='d-flex justify-content-center vh-100 align-items-center' id='b-img'>
      <div className='border border-3 border-primary p-3 bg-white'>

        <form>
          <h3 className='text-center'>Login Page</h3>

          <div className='mb-3'>
            <label htmlFor="Email">Email</label>

            <input placeholder='Enter your email id' type="email" name='email' className='form-control'>
            </input>
          </div>
          <div className='mb-3' >
            <label htmlFor="Password">Password</label>

            <input placeholder='Enter your password' type="password" name='password  ' className='form-control'>
            </input>
          </div>

          <div className='mb-3'>
            <input type='checkbox' className='mx-1'></input>
            <label htmlFor='checkbox'>Remeber Me</label>
          </div>


        
          <Link to="/menu">

        {/* <div className='d-grid'> */}
        
          <button className= 'btn3 btn btn-danger' type='submit'>Login</button>
      
          </Link>


{/* 
          <Link to="/signup">

<button className=' btn btn-danger' type='submit'>Signup</button>

</Link> */}

        {/* </div> */}


        </form>

      </div>
    </div>
  )
}

export default Login
