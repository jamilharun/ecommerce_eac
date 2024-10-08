import React, { useState } from 'react'
import { Link, NavLink, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { CiShop, CiLogin, CiShoppingCart, CiBoxList, CiSearch  } from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";
import eaclogo from '../assets/eac.png'
import eacIcon from '../assets/eacExpress.png'
// import LoginButton from '../components/Login';
import Footer from './Footer';

import Categories from './Categories';
import ProductPage from '../pages/ProductPage';
import ProductView from '../pages/ProductView';
import Cart from '../pages/Cart';
import PurchaseHistory from '../pages/PurchaseHistory';
import AboutUs from '../pages/AboutUs';
import PurchaseSuccess from '../pages/PurchaseSuccess';
import { UserProfile } from '../pages/UserProfile';

const NavBar = () =>{
  window.addEventListener('resize', () =>{console.log(window.innerWidth);});

  const [searchTerm, setSearchTerm] = useState('')

  const [goToProfile, setGoToProfile] = useState(false)
  
  // const navigate = useNavigate();

  if (goToProfile) {return <Navigate to='/profile'/>}

  return (
    <div>
       <nav className='bg-CartoonViolence flex place-content-between font-poppins text-sm top-0 fixed w-full h-16 px-16'>
        <div className='flex justify-center items-center '>
          <img src={eaclogo} alt="" className='w-11 h-11 -rotate-12'/>
          <img src={eacIcon} alt="" className='w-36 h-11 absolute left-20'/>
        </div>
        <div className='flex justify-center items-center'>
          <div className="bg-white rounded-full flex justify-center items-center ">
            <input 
              type="text"
              onChange={(e)=>{setSearchTerm(e.target.value)}}
              value={searchTerm}
              // onFocus={()=>{navigate()}}
              placeholder='search box'
              className='ml-5 w-80 h-7 px-4 
              '/>
            <CiSearch className='navMenuIcon text-red-Rosewood text-lg'/>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex justify-center items-center '>
            <li  className='navMenu'> <NavLink to='main'>Home</NavLink> </li>
            <li className='navMenu'><NavLink to='AboutUs'>About us</NavLink> </li>
            <li className='navMenu'><NavLink to='Product/'>Shop</NavLink></li>
            <li className='navMenu'><NavLink to='Profile'>My Account</NavLink></li>
            <li><NavLink to='Cart'><CiShoppingCart className='shoppingCart'/></NavLink></li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet/>
        <Routes>
            <Route path="/*" element={<Categories/>}/>  
            <Route path="Product/*" element={<ProductPage/>}/>
            <Route path="ProductView" element={<ProductView />}/>
            <Route path="AboutUs" element={<AboutUs/>}/>
            <Route path="Profile" element={<UserProfile/>}/>
            <Route path="Cart" element={<Cart/>}/>
            <Route path="Purchase" element={<PurchaseSuccess/>}/>
            <Route path="PurchaseHistory" element={<PurchaseHistory />} />
        </Routes>
        { <Footer/>}
        
      </div>
    </div>
  )
}
export default NavBar;