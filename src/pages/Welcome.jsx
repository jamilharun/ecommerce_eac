import React, { useContext, useState } from 'react'

import eaclogo from '../assets/eaclogo.png'
import arrowright from '../assets/arrowright.png'
import arrowleft from '../assets/arrowleft.png'
import eacExprLogo from '../assets/eac_express_logo.png'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../components/Profile'
// import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/Login'
import { PiUserCircleFill } from "react-icons/pi";
import { FaLock, FaUser } from "react-icons/fa";

export default function Welcome() {
  const [goTOHome, setGoToHome] = useState(false)
  const [goToProfile, setGoToProfile] = useState(false)

  if (goTOHome) {return <Navigate to="/home"/>}
  if (goToProfile) {return <Navigate to="/profile"/>}

  // auth0

  // const { user, isAuthenticated, isLoading } = useAuth0();
  // if (isAuthenticated) return <Navigate to='/home'/>

  // const { sub} = useContext(userAuth)

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
          <div className='flex flex-col items-center justify-center'>
            
              
            
            <div className='welcomeAuth'>
              <div >
                <FaUser/> <input type="text" name="" id="" />
              </div>
            </div>
            <div className='welcomeAuth'>
              <div >
                <FaLock/>
              </div>
              <input type="text" name="" id="" /></div>
            <button className='welcomebtn'><p className="welcomebtntxt">Login</p></button>
            
            {/* <LoginButton /> */}
            
            
          </div>
      </div>
      <span className='bottom-0 absolute'><img src={arrowleft} alt="" /></span>
    </section>
  )
}
