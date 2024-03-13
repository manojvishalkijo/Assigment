
import React, { useState } from 'react';
import './Register.css';
import { FaUser,FaLock,FaUnlock} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import { Link } from 'react-router-dom';
const Register = () => {
   return (
     <div className='wrapper'>
    <form action=""> 
     <h1>Ash gardens</h1>

      <h1>Register</h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUser className='icon'/>
        </div>
        
        <div className="input-box">
          <input type="email" placeholder='Email' required />
          <IoIosMail className='icon'/>
        </div>
        
        <div className="input-box">
          <input type="password" placeholder='password' required />
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Confirm password' required />
          <FaUnlock className='icon'/>
        </div>
        <Link to='/login'><button type="submit">Register</button></Link>

        <div className="register-link">
        <p>Don't have an account? <Link to="/login">Login</Link></p>

    </div>
    </form>
    <footer>
        <p>&copy; 2023 Ash Gardens. All rights reserved.</p>
      </footer>
    </div>
  );
};

    
export default Register;