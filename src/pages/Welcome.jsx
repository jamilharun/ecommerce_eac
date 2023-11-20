import React, { useContext, useState } from 'react'

import eaclogo from '../assets/eaclogo.png'
import eacExprLogo from '../assets/eac_express_logo.png'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../components/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/Login'

export default function Welcome() {
  const [goTOHome, setGoToHome] = useState(false)
  const [goToProfile, setGoToProfile] = useState(false)

  if (goTOHome) {return <Navigate to="/home"/>}
  if (goToProfile) {return <Navigate to="/profile"/>}

  // auth0

  const { user, isAuthenticated } = useAuth0();
  // if (isAuthenticated) return <Navigate to='/home'/>

  // const { sub} = useContext(userAuth)

  return (
    <section className='w-screen h-screen bg-red-LightApricot grid place-content-center'>
      <span></span>
        <div className='w-full h-full welcomePage grid grid-cols-3 gap-16 '>
          <div className='grid place-items-center'>
            <img src={eaclogo} alt="" className=''/>
          </div>
          <div className='grid place-items-center'>
            <img src={eacExprLogo} alt=""/>
          </div>
          <div className='flex flex-col items-center justify-center'>
            {
            user?.sub ? 
              <div onClick={()=>{setGoToProfile(true) }} >
                <img className='rounded-full h-20 w-20 self-center' src={user.picture} alt={user.name} />
                <h2 className='font-poppins font-medium text-xl hover:text-red-Rosewood'>welcome back {user.name}</h2>
              </div> : <LoginButton />
            }
            {/* <button className='welcomebtn'><p className="welcomebtntxt">Login</p></button> */}
            <button 
              onClick={()=> {setGoToHome(true)}} 
              className='welcomebtn'><p className='welcomebtntxt'>Home</p></button>
          </div>
        </div>  
      <span></span>
    </section>
  )
}
