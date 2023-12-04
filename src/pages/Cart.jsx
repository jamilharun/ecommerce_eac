import React, { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useUser } from '../utils/user'
import { client, urlFor } from '../utils/sanity'
import { fetchingUserCart } from '../utils/DataQuery'

export default function Cart() {
  const [userId, getUserId] = useState(null)
  const [numArray, getNumArray] = useState(null)

  const [fetchedData, getFetchedData] = useState(null)
  const [loading, setLoading] = useState(null)

  const {userData} = useUser()
  

  const fetchingCart = async ()  => {
    setLoading(true)
    try {
      const data = await client.fetch(fetchingUserCart(userId))
      getFetchedData(data)
      setLoading(false)

      arraylength()
    } catch (err) {
      setLoading(false)
      console.error(err);
    }
    console.log('cartfetching finished');
  }

  const arraylength = () => {
    var arrlength = fetchedData.length
    getNumArray(arrlength)
  }
  

  useEffect(()=>{
    getUserId(userData._id)

    fetchingCart()
  },[userData])


  return (
    <div>
      <div className='bg-articDaisy w-screen h-screen py-20 px-80'>
        <div className='flex justify-start items-center mt-5 text-5xl font-semibold'>
          <IoCartOutline/>
          Cart {numArray && `(${numArray} items)`}
        </div>
        <div className='border-EacColor-BlackPearl border-2'>
          <div className='flex items-center text-center list-none text-2xl font-semibold p-2'>
              <li className='w-full'>item</li>
              <li className='w-full'>Price</li>
              <li className='w-full'>Quantity</li>
              <li className='w-full'>Total</li>
          </div>
          {
            fetchedData?.map(item => (
              <div key={item._id} className='flex justify-between items-center text-2xl font-semibold border-EacColor-BlackPearl border-t-2 p-2'>
                <div className='w-full h-full'>
                  <img src={(urlFor(item.productSaved.image).url())} alt="" className='object-cover '/>
                </div>
                <p className='w-full text-center'>₱{item.price}</p>
                <p className='w-full text-center'>{item.quantity}</p>
                <p className='w-full text-center'>₱{item.total}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    
  )
}
