import React from 'react'
import { CiShop, CiLogin, CiShoppingCart, CiBoxList  } from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";


export default function NavBar() {
  return (
    <nav className='bg-EacColor-DeepFir flex place-content-between font-poppins text-sm top-0 h-10 absolute w-full'>
      <div className='flex justify-center items-center'>
        <CiShop className='ml-4 w-7 h-7 text-white'/>
        {/* <img src="../assets/jamil.png" alt="" className='w-1 h-1'/> */}
        <p className='font-poppins text-white'>Ecommerce app</p>
      </div>
      <div className="flex justify-center items-center">
        <input type="text" name="" id="" placeholder='search box'
        className='searchBox w-64 rounded-lg px-4 '/>
      </div>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-3'>
          <li className='navMenu'><CiShop className='navMenuBtn'/> Product</li>
          <li className='navMenu'><CiShoppingCart className='navMenuBtn'/> Cart</li>
          <li className='navMenu'><BiPurchaseTag className='navMenuBtn'/> Purchase</li>
        </ul>
        <div className='flex justify-center items-center px-3'>
          <p className='navMenu'><CiLogin className='navMenuBtn'/> Login</p>
        </div>
      </div>
    </nav>
  )
}
