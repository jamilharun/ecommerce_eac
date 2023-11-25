import React, { useState } from 'react'
import { CiShop, CiLogin, CiShoppingCart, CiBoxList, CiSearch  } from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";
import eaclogo from '../assets/eac.png'
import eacIcon from '../assets/eacExpress.png'
// import LoginButton from '../components/Login';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export default function NavBar() {
  // document.querySelector('img').src = lggopic

  const { user, isAuthenticated } = useAuth0();

  const [goToProfile, setGoToProfile] = useState(false)
  if (goToProfile) {return <Navigate to='/profile'/>}

  return (
    <nav className='bg-CartoonViolence flex place-content-between font-poppins text-sm top-0 h-16 w-full px-16'>
      <div className='flex justify-center items-center '>
        <img src={eaclogo} alt="" className='w-11 h-11 -rotate-12'/>
        <img src={eacIcon} alt="" className='w-36 h-11 absolute left-20'/>
      </div>
      <div className='flex justify-center items-center'>
        <div className="bg-white rounded-full flex justify-center items-center ">
          <input type="text" name="" id="" placeholder='search box'
          className='ml-5 w-80 h-7 px-4 '/>
          <CiSearch className='navMenuIcon text-red-Rosewood text-lg'/>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center '>
          <li className='navMenu'> Home</li>
          <li className='navMenu'> About us</li>
          <li className='navMenu'> Shop</li>
          <li className='navMenu'> My Account</li>
          <CiShoppingCart className='shoppingCart'/>
        </ul>
        
      </div>
    </nav>
  )
}
