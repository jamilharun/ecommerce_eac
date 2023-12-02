import React, { useEffect, useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { IoCartOutline, IoCartSharp  } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { client, urlFor } from '../utils/sanity';
import { createCartFile } from '../utils/DataQuery';
import { useUser } from '../utils/user';


const ProductView = () => {
    const [userId, getUserId] = useState(null)
    const [prodId, getProdId] = useState(null)
    const [prodPrice, setProdPrice] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(null)
    
    const [cartSuccessful, setCartSuccessful] = useState(false)
    const [loading, setLoading] = useState(null)

    const navigate = useNavigate();
    const location = useLocation()
    const product = location

    const {userData} = useUser()
    
    // probably useless but i just wanna see the data output
    useEffect(()=>{

        console.log(userData);
        console.log(product);

        getUserId(userData._id)
        getProdId(product.state._id)
        setProdPrice(product.state.price)
        setQuantity(quantity)


    },[product])
    
    useEffect(()=>{
        setTotal(quantity * prodPrice)

        // console.log(total);
    },[prodPrice, quantity])

    const saveToCart = () => {

        setLoading(true)

        if (userId && prodId && prodPrice && quantity && total) {
            console.log('all operands are true');

            console.log(userId);
            console.log(prodId);
            console.log(prodPrice);
            console.log(quantity);
            console.log(total);
            
            client
                .create(createCartFile(userId, prodId, prodPrice, quantity, total))
                .then(()=>{
                    setLoading(false)
                    
                    setCartSuccessful(true)
                    navigate('/home')

                })
                .catch(e=>{console.log(e)})
        } else (setLoading(false))
    }

    return (
    <div>
        <div className='w-screen h-screen bg-articDaisy '>
            {cartSuccessful && 
                (
                    <div 
                        onClick={()=>{
                            setCartSuccessful(false)

                        }}
                        className='notifBlock absolute w-screen h-screen z-50'>
                        <div className='h-screen w-screen flex justify-center items-center'>
                            <div className='bg-white border-EacColor-BlackPearl border-2 w-96 h-52 rounded-2xl flex flex-col
                                justify-center items-center'>
                                <CiCircleCheck className='text-DarkLemonLime text-8xl'/>
                                <p className='font-medium text-xl'>Successfully added to Cart</p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='productViewBox flex justify-center items-center py-40 px-52'>
                <div className='productViewPic object-cover'>
                    {product && (
                        <img src={(urlFor(product.state.image).url())} alt={product.state.name} />
                    )}
                </div>
                <div className='font-poppins  '>
                    {product && (
                    <div>
                        <p className='text-4xl font-medium py-5 mx-5'>{product.state.name}</p>
                        <p className='text-3xl font-medium py-5 mx-5'>₱{product.state.price}.00</p>
                        <p className='text-xl font-medium py-5 mx-5'>{product.state.description}</p>
                    </div>
                    )}
                    <div>
                        <p className='text-DarkLemonLime text-3xl font-medium mx-5'>IN STOCK</p>
                        <input type="number" value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder='Qty:' className='w-20 h-10 mx-5 my-1 text-xl text-white bg-AlluraRed placeholder:text-white'/>
                    </div>
                    {
                        loading ? (
                            <div className='py-10 flex'>
                                <button 
                                    className='bg-white rounded-full border-EacColor-BlackPearl border-2 w-64 mx-5 text-xl font-medium flex 
                                    text-EacColor-BlackPearl justify-center items-center'>
                                    <p className='w-full'>ADD TO CART</p>
                                    <IoCartSharp className='text-4xl font-medium text-EacColor-BlackPearl bg-white rounded-full m-1'/>
                                </button>
                                <button
                                    onClick={()=>{}} 
                                    className='bg-white rounded-full border-EacColor-BlackPearl border-2 w-64 mx-5 text-xl font-medium flex
                                    text-EacColor-BlackPearl justify-center items-center'>
                                    <p className='w-full'>BUY NOW</p>
                                    <IoCartOutline className='text-4xl font-medium text-EacColor-BlackPearl bg-white rounded-full m-1'/>
                                </button>
                            </div>
                        ) : (
                            <div className='py-10 flex'>
                                <button 
                                    className='bg-AlluraRed rounded-full border-white border-2 w-64 mx-5 text-xl font-medium flex 
                                    text-white justify-center items-center'
                                    onClick={()=>{
                                        saveToCart()
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

                        )
                    }
                </div>
            </div>
        </div>
    </div>

    // <div>

    // </div>
  )
}
export default ProductView