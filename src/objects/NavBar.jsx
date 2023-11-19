import React from 'react'
import { CiShop, CiLogin, CiShoppingCart, CiBoxList  } from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";
import eaclogo from '../assets/eaclogo.png'
import LoginButton from '../components/Login';
import { useAuth0 } from '@auth0/auth0-react';

export default function NavBar() {
  // document.querySelector('img').src = lggopic

  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className='bg-red-DarkRed flex place-content-between font-poppins text-sm top-0 h-10 w-full'>
      <div className='flex justify-center items-center '>
        <img src={eaclogo} alt="" className='w-5 h-5 mx-4'/>
        <p className='font-poppins text-white'>Ecommerce app</p>
      </div>
      <div className="flex justify-center items-center">
        <input type="text" name="" id="" placeholder='search box'
        className='searchBox w-64 rounded-lg px-4 '/>
      </div>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center '>
          <li className='navMenu'><CiShop className='navMenuIcon'/> Product</li>
          <li className='navMenu'><CiShoppingCart className='navMenuIcon'/> Cart</li>
          <li className='navMenu'><BiPurchaseTag className='navMenuIcon'/> Purchase</li>
        </ul>
        <div className='flex justify-center items-center px-3'>
          {/* <p className='navMenu'><CiLogin className='navMenuIcon'/> Login</p> */}
          
          {
            user?.sub && (
              <img src={user.picture} alt={user.name} className='w-6 h-6 mx-4 rounded-full'/>
            )
          }
          {!user?.sub && (<LoginButton/>)}
        </div>
      </div>
    </nav>
  )
}
