import React, { useEffect, useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoCartOutline, IoCartSharp  } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { urlFor } from '../utils/sanity';




const ProductView = () => {
    const [product, getProduct] = useState()
    const [addCart, getAddCart] = useState(false)
    
    const location = useLocation()

    useEffect(()=>{
        getProduct(location)
        console.log(product);
    })

    // const cartNotif = () => {
    //     if (condition) {
            
    //     }
    // }

    return (
    <div>
        <div className='w-screen h-screen bg-articDaisy '>
            {/* notif div */}
            <div className='notifBlock absolute w-screen h-screen z-50'>
                <div className='h-screen w-screen flex justify-center items-center'>
                    <div className='bg-white border-EacColor-BlackPearl border-2 w-96 h-52 rounded-2xl flex flex-col
                        justify-center items-center'>
                        <CiCircleCheck className='text-DarkLemonLime text-8xl'/>
                        <p className='font-medium text-xl'>Successfully added to Cart</p>
                    </div>
                </div>
            </div>
            <div className='productViewBox flex justify-center items-center py-40 px-52'>
                <div className='productViewPic object-cover'>
                    <img src={(urlFor(product.state.image).url())} alt={product.state.name} />
                </div>
                <div className='font-poppins  '>
                    <p className='text-4xl font-medium py-5 mx-5'>{product.state.name}</p>
                    <p className='text-3xl font-medium py-5 mx-5'>₱{product.state.price}.00</p>
                    <p className='text-xl font-medium py-5 mx-5'>{product.state.description}</p>
                    <div>
                        <p className='text-DarkLemonLime text-3xl font-medium mx-5'>IN STOCK</p>
                        
                    </div>
                    <div className='py-10 flex'>
                        <button 
                            className='bg-AlluraRed rounded-full border-white border-2 w-64 mx-5 text-xl font-medium flex 
                            text-white justify-center items-center'
                            onClick={()=>{
                                getAddCart(true)
                            }}>
                            <p className='w-full'>ADD TO CART</p>
                            <IoCartSharp className='text-4xl font-medium text-AlluraRed bg-white rounded-full m-1'/>
                        </button>
                        <button
                            onClick={()=>{}} 
                            className='bg-AlluraRed rounded-full border-white border-2 w-64 mx-5 text-xl font-medium flex
                            text-white justify-center items-center'>
                            <p className='w-full'>BUY NOW</p>
                            <IoCartOutline className='text-4xl font-medium text-AlluraRed bg-white rounded-full m-1'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ProductView