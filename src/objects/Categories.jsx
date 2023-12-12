import React, { useEffect, useState } from 'react'

import medicalSupplies from '../assets/medicalSupplies.png'
import schoolEssentials from '../assets/schoolEssentials.png'
import schoolMerch from '../assets/schoolMerch.png'
import schoolUniform from '../assets/schoolUniform.png'
import { Link, NavLink, Navigate } from 'react-router-dom'
import Footer from './Footer'
import { client, urlFor } from '../utils/sanity'
import { fetchCategory } from '../utils/DataQuery'

const Categories = ({}) => {

  // const categories = [
  //   {category: 'SCHOOL ESSENTIALS', name: 'School Essentials', pic: schoolEssentials},
  //   {category: 'MEDICAL SUPPLIES', name: 'Medical Supplies', pic: medicalSupplies},
  //   {category: 'SCHOOL UNIFORM', name: 'School Uniform', pic: schoolUniform},
  //   {category: 'SCHOOL MERCHANDISE', name: 'School Merchandise', pic: schoolMerch},
  // ];

  const [categories, setCategories] = useState(null)


    const fetchingCategoty = () =>{
      client
        .fetch(fetchCategory)
        .then((ok)=>{
          setCategories(ok)
          console.log(ok);
        })
        .catch((er)=>{
          console.log(er);
        })
    }
    

  useEffect(()=>{
    if (categories == null) {
      fetchingCategoty()
    }
  })

  return (
    <div className='px-20 bg-articDaisy h-screen w-full'>
      
        <h1 className='text-3xl font-bold pt-32 mb-10'>Categories</h1>
        <div className='grid place-content-center grid-cols-4 place-items-center gap-20 '>
        {
          categories?.map(user =>(
            <li className='list-none' key={user._id}>
              <Link to={`Product?category=${user.categoryname}`} className='categorybtn' >
                <img src={urlFor(user.image).url()} alt="" className='categoryPic' />
                <p className='categoryTitle'>{user.categoryname}</p>
              </Link>
            </li>
          ))
        }  
          
        </div>
      {/* <Footer/> */}
      <div className='bg'>

      </div>
    </div>
  )
}
export default Categories;