
import { Link } from "react-router-dom";

import React from 'react'
import "../../styles/Style.css"
const Signup = () => {
  return (
    <div className='d-flex justify-content-center vh-100 align-items-center' id='b-img'>
      <div className='border border-3 border-primary p-3 bg-white'>

        <form>
          <h3 className='text-center'>Signup Page</h3>

          <div className='mb-3'>
            <label htmlFor="Name">First Name</label>

            <input placeholder='Enter your first name' type="name" name='email' className='form-control'>
            </input>
          </div>

          <div className='mb-3'>
            <label htmlFor="Name">Last Name</label>

            <input placeholder='Enter yourlast name' type="name" name='email' className='form-control'>
            </input>
          </div>

          <div className='mb-3'>
            <label htmlFor="Email">Email</label>

            <input placeholder='Enter your email id' type="email" name='email  ' className='form-control'>
            </input>
          </div>



          <div className='mb-3'> 
            <label htmlFor="Password">Password</label>

            <input placeholder='Enter your password' type="password" name='password  ' className='form-control'>
            </input>
          </div>

          <Link to="/">

       <button className='btn2 btn btn-danger' type='submit'>Signup</button>

       </Link>



  
       {/* <Link to="/login"> */}

{/* <div className='d-grid'> */}

  {/* <button className= 'btn btn-danger' type='submit'>Login</button> */}

  {/* </Link> */}

{/* </div> */}



        </form>

      </div>
    </div>
  )
}

export default Signup
