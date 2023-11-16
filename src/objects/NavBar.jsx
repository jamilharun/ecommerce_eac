import React from 'react'

export default function NavBar() {
  return (
    <nav className='bg-EacColor-DeepFir flex place-content-between font-poppins text-sm'>
      <div className=''>
        <img src="" alt="" />
        <p>Ecommerce app</p>
      </div>
      <div className='flex'>
        <ul className='flex'>
          <li className=''>Product</li>
          <li>Cart</li>
          <li>Purchasa</li>
        </ul>
        <div>
          <p>Login</p>
        </div>
      </div>
    </nav>
  )
}
