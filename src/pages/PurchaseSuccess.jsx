import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PurchaseSuccess() {
  return (
    <div>
        <div className='bg-articDaisy w-screen h-screen'>
            <div className='flex flex-col justify-center items-center py-36 '>
                {/* icon here */}
                <p className='text-AlluraRed font-semibold text-2xl font-poppins py-5'>Your Order Was SuccessFul</p>
                <p className='text-6xl font-semibold'>Thank you for your Purchase</p>
                <p className='text-2xl pt-10 font-medium pb-36'>Your order number is #{}</p>
                <NavLink to={'main'} className='text-2xl text-AlluraRed'>Back to Home</NavLink>
            </div>
        </div>
    </div>
  )
}
