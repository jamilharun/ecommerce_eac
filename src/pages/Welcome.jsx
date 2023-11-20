import React, { useContext, useState } from 'react'

import eaclogo from '../assets/eaclogo.png'
import arrowright from '../assets/arrowright.png'
import arrowleft from '../assets/arrowleft.png'
import eacExprLogo from '../assets/eac_express_logo.png'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../components/Profile'
import LoginButton from '../components/Login'
import { PiUserCircleFill } from "react-icons/pi";
import { FaLock, FaUser } from "react-icons/fa";



export default function Welcome() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) = {
    // const doc = {

    // }
  }

  return (
    <section className='w-screen h-screen  bg-red-LightApricot flex justify-center items-center'>
      <span className='top-0 absolute'><img src={arrowright} alt="" /></span>
        <div className='w-full h-full welcomePage grid grid-cols-3 gap-16 '>
          <div className='grid place-items-center'>
            <img src={eaclogo} alt="" className=''/>
          </div>
          <div className='grid place-items-center'>
            <img src={eacExprLogo} alt=""/>
          </div>
          
          <form 
            className='flex flex-col items-center justify-center'
            onSubmit={handleSubmit}>
            
            <div className='welcomeAuth'>
              <div className='bg-white rounded-full w-5 h-5 flex justify-center items-center mx-5'>
                <FaUser className='welcomeAuthIcon'/> 
              </div>
              <input 
                className='welcomeAuthInp' 
                type="email" 
                placeholder='User name' 
                required
                pattern="^[a-zA-Z0-9._%+-]+@eac\.edu\.ph$"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
            </div>
            
            <div className='welcomeAuth'>
              <div className='bg-white rounded-full w-5 h-5 flex justify-center items-center mx-5'>
                <FaLock className='welcomeAuthIcon'/>
              </div>
              <input 
                className='welcomeAuthInp' 
                type="password"  
                placeholder='Password'
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            
            <button className='welcomebtn'><p className="welcomebtntxt">Login</p></button>            
            
          </form>
      </div>
      <span className='bottom-0 absolute'><img src={arrowleft} alt="" /></span>
    </section>
  )
}
