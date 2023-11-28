import React, { useEffect, useState } from 'react'
import { CiCircleList } from 'react-icons/ci'
import NavBar from '../objects/navBar'
import Footer from '../objects/Footer'
import { Link, NavLink, Outlet, Route, Routes, useParams, useSearchParams } from 'react-router-dom'
import { fetchProductByCategory } from '../utils/DataQuery'
import { client, urlFor } from '../utils/sanity'

const ProductPage = () => {

    const [product, setProduct] = useState(null);
    const [productQuery, setProductQuery] = useState(null);
    const [loading, setLoading] = useState(false);

    const [catParams] = useSearchParams()


    const fetchItem = async () => {
        setLoading(true)

        const query = fetchProductByCategory(catParams.get("category"))
        
        // console.log(query);
        try {
            const fetching = await client.fetch(`${query}`)
            // .then((data)=>{setProductQuery(data)})
            // .catch(err => {console.log(err.message)})
            setProductQuery(fetching)
            // console.log(productQuery);
        } catch (error) {
            console.error('Error' + error);
            
        }
        console.log(productQuery);
        setLoading(false)
    }

    const toString = () => {
        // console.log(catParams.get("category"));
        // getCat(catParams.get("category"))
        // console.log(cat);
        fetchItem()
    }
    
    // console.log(catParams);
    
    useEffect(()=>{
        toString()
    },[])

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
                            {/* <Link > */}
                                <img src={(urlFor(product.image).url())} alt={product.name} className='w-full h-full object-cover rounded-3xl' />
                                <div className='pl-5'>
                                    <p className='text-xl font-bold'>{product.name}</p>
                                    <p className='text-xl font-bold'>₱{product.price}.00</p>
                                </div>
                            {/* </Link> */}
                        </div>
                        ))
                    }
                    
                </div>
            </div>


        </div>
        {/* <Footer/> */}
    </div>
    )
}
export default ProductPage