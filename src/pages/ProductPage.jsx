import React, { useEffect, useState } from 'react'
import { CiCircleList } from 'react-icons/ci'
// import NavBar from '../objects/navBar'
import Footer from '../objects/Footer'
import { Link, NavLink, Navigate, Outlet, Route, Routes, useParams, useSearchParams } from 'react-router-dom'
import { fetchProduct, fetchProductByCategory } from '../utils/DataQuery'
import { client, urlFor } from '../utils/sanity'
import ProductView from './ProductView'

const ProductPage = () => {

    // const [product, setProduct] = useState(null);
    const [productQuery, setProductQuery] = useState(null);
    const [loading, setLoading] = useState(false);

    const [queryType, setQueryType] = useState()
    
    const [catParams] = useSearchParams()

    useEffect(()=>{
        console.log(productQuery);
    })

    
    useEffect(()=>{
        // console.log(queryType);
        const fetchItem = async () => {
            setLoading(true)
            try {
                const fetching = await client.fetch(`${queryType}`)
                setProductQuery(fetching)
                setLoading(false)
            } catch (error) {
                console.error('Error' + error);
                setLoading(false)
            }
            console.log(productQuery);
        }
        fetchItem()
    },[queryType])
    
    useEffect(()=>{
        const conditionalQueryType = () => {
            if (!catParams.get("category")) {
                setQueryType(fetchProduct)
            } else {
                setQueryType(fetchProductByCategory(catParams.get("category")))
            }
        }
        conditionalQueryType()
    },[catParams.get("category")])


    return (
    <div className='bg-articDaisy h-full w-full px-28'>

        <div className='flex  py-32 justify-center h-full w-full'>
            <div className='px-10 pt-10'>
                <div className='flex items-center'>
                    <CiCircleList className='productNavtitl'/>
                    <p className='productNavtitl'>Categories</p>
                </div>
                
                
                <div className="checkbox flex flex-col">
                    <Link to={`?category=SCHOOL ESSENTIALS`} className='productNavBtn' >School Essentials</Link>
                    <Link to={`?category=MEDICAL SUPPLIES`} className='productNavBtn' >Medical Supplies</Link>
                    <Link to={`?category=SCHOOL UNIFORM`} className='productNavBtn' >School Uniform</Link>
                    <Link to={`?category=SCHOOL MERCHANDISE`} className='productNavBtn' >School Merchandise</Link>
                </div>
            </div>
            
            <div className=''>
                
                <div className='grid grid-cols-3 gap-7 place-content-center mx-10'>
                    {
                    productQuery?.map(product => (
                        <div key={product._id} className='w-full m-6 '> 
                            <NavLink to='/main/ProductView' state={product}>
                                <img src={(urlFor(product?.image).url())} alt={product.name} className='w-full h-full object-cover rounded-3xl' />
                                <div className='pl-5'>
                                    <p className='text-xl font-bold'>{product.name}</p>
                                    <p className='text-xl font-bold'>₱{product.price}.00</p>
                                </div>
                                
                            </NavLink>
                        </div>
                        ))
                    }
                    
                </div>
            </div>


        </div>
        
        
        {/* <div className='bottom-0 bg-CartoonViolence w-full h-10 '></div> */}
        {/* <Footer/> */}
    </div>
    )
}
export default ProductPage