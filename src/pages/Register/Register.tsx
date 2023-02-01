import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
      <div className="register-background">
      <form className='register-form'>
        <h3>Register Here</h3>

        <label htmlFor="" className="register-label">Email</label>       
         <input type="text" className="register-input" placeholder="E-mail" />


        <label htmlFor="" className="register-label">Username</label>
         <input type="text" className="register-input" placeholder="Username" />

         <label htmlFor="" className="register-label">Password</label>
         <input type="text" className="register-input" placeholder="Password" /> 

        <label htmlFor="" className="register-label">Confirm Password</label>
         <input type="text" className="register-input" placeholder="Confirm Password" />

        <button className='register-button'>Register</button>
        <p className='register-par'>
          Allready have account?
        <Link className="register" to='/'> Login here</Link>
        </p>
      </form>
    </div>
  )
}

export default Register