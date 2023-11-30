import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

export default function Cart() {
  return (
    <div>
      <div className='bg-articDaisy w-screen h-screen py-20 px-80'>
        <div className='flex justify-start items-center mt-5 text-5xl font-semibold'>
          <IoCartOutline/>
          Cart
        </div>
        <div className='border-EacColor-BlackPearl border-2'>
          <div className='flex items-center text-center list-none text-2xl font-semibold p-2'>
              <li className='w-full'>item</li>
              <li className='w-full'>Price</li>
              <li className='w-full'>Quantity</li>
              <li className='w-full'>Total</li>
          </div>
          <div className='flex justify-center items-center text-2xl font-semibold '>
            {
              
            }
          </div>
        </div>
      </div>
    </div>
    
  )
}
