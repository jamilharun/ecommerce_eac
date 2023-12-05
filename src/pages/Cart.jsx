import React, { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useUser } from '../utils/user'
import { client, urlFor } from '../utils/sanity'
import { fetchingUserCart } from '../utils/DataQuery'
import { BsCartCheckFill } from "react-icons/bs";

export default function Cart() {
  const [userId, getUserId] = useState(null)
  const [numArray, getNumArray] = useState(null)
  const [totalAmount, getTotalAmount] = useState(null)

  const [fetchedData, getFetchedData] = useState(null)
  const [loading, setLoading] = useState(null)

  const {userData} = useUser()
  
  // working on checkout button. dahil di pa nagawan ng code. 
  // at aayusin ulit database para tugma sa magiging system 
  const CheckoutBtn = () => {

  }

  //---------------------------------

  var total = 9;
  const gettingTotal = (data) => {

    data.forEach((number) => {
      total += number.total;
    });
    // console.log(total);
    getTotalAmount(total)
  }

  useEffect(()=>{
    if (fetchedData === null || fetchedData === undefined || (Array.isArray(fetchedData) && fetchedData.length === 0)) {
      console.log('no data');
    } else {
      const arraylength = () => {
        var arrlength = fetchedData.length
        getNumArray(arrlength)
      }
      arraylength()
    }

    console.log(fetchedData);
  },[fetchedData])

  useEffect(()=>{
    // console.log(fetchingUserCart(userId));
    const fetchingCart = async ()  => {
      setLoading(true)
      try {
        const data = await client.fetch(fetchingUserCart(userId))
        gettingTotal(data)
        getFetchedData(data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.error(err);
      }
      console.log('cartfetching finished');
    }
    fetchingCart()
  },[userId])

  useEffect(()=>{
    getUserId(userData._id)
  },[userData])


  return (
    <div>
      <div className='bg-articDaisy w-screen h-full py-20 px-80'>
        <div className='flex justify-start items-center mt-5 text-5xl font-semibold'>
          <IoCartOutline/>
          Cart {numArray && `(${numArray} items)`}
        </div>
        <div className='border-EacColor-BlackPearl border-2 '>
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
      <div className='mt-3 flex justify-end'>
        <button
          onClick={()=>{}} 
          className='bg-AlluraRed border-white border-2 rounded-full flex justify-center items-center w-64'>
          <p className='text-white text-center w-full font-semibold text-2xl'>Checkout</p>
          <BsCartCheckFill className='text-AlluraRed bg-white rounded-full m-2 text-4xl w-10 h-10'/>
        </button>
        <div className='bg-AlluraRed border-white border-2 rounded-full flex justify-center items-center w-80'>
          <p className='text-white text-center w-full font-semibold text-2xl'>total: ₱{totalAmount}</p>
        </div>
      </div>
        
      </div>
    </div>
    
  )
}
