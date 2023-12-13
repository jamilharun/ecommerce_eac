import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";

export default function PurchaseSuccess() {
  const [orderId, getOrderId] = useState(null)

  const [id] = useSearchParams();

  console.log(id.get('id'));

  useEffect(()=>{
    getOrderId(id.get('id'))
    // console.log(getOrderId(id.get('category')));
  }, [id.get('id')])

  return (
    <div>
        <div className='bg-articDaisy w-screen h-screen'>
            <div className='flex flex-col justify-center items-center py-36 '>
                <FaCheckCircle className='text-8xl' />
                <p className='text-AlluraRed font-semibold text-2xl font-poppins py-5'>Your Order Was SuccessFul</p>
                <p className='text-6xl font-semibold'>Thank you for your Purchase</p>
                <p className='text-2xl pt-10 font-medium pb-36'>Your order number is #{orderId}</p>
                <NavLink to={'main'} className='text-2xl text-AlluraRed'>Back to Home</NavLink>
            </div>
        </div>
    </div>
  )
}
