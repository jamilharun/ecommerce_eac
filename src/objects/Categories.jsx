import React from 'react'

import medicalSupplies from '../assets/medicalSupplies.png'
import schoolEssentials from '../assets/schoolEssentials.png'
import schoolMerch from '../assets/schoolMerch.png'
import schoolUniform from '../assets/schoolUniform.png'
import { Link, NavLink, Navigate } from 'react-router-dom'
import Footer from './Footer'

const Categories = ({}) => {

  const categories = [
    {category: 'SCHOOL ESSENTIALS', name: 'School Essentials', pic: schoolEssentials},
    {category: 'MEDICAL SUPPLIES', name: 'Medical Supplies', pic: medicalSupplies},
    {category: 'SCHOOL UNIFORM', name: 'School Uniform', pic: schoolUniform},
    {category: 'SCHOOL MERCHANDISE', name: 'School Merchandise', pic: schoolMerch},
  ];

  return (
    <div className='px-20 bg-articDaisy h-screen w-full'>
      
        <h1 className='text-3xl font-bold pt-32 mb-10'>Categories</h1>
        <div className='grid place-content-center grid-cols-4 place-items-center gap-20 '>
        {
          categories.map(user =>(
            <li className='list-none' key={user.category}>
              <Link to={`Product?category=${user.category}`} className='categorybtn' >
                <img src={user.pic} alt="" className='categoryPic' />
                <p className='categoryTitle'>{user.name}</p>
              </Link>
            </li>

            // <Link to={`Product/${user.category}`} className='categorybtn'> 
            //   <img src={medicalSupplies} alt="" className='categoryPic' />
            //   <p className='categoryTitle'>Medical Supplies</p>
            // </Link>

            // <Link to={`Product/${user.category}`} className='categorybtn'>
            //   <img src={schoolUniform} alt="" className='categoryPic'/>
            //   <p className='categoryTitle'>School Uniform</p>
            // </Link>

            // <Link to={`Product/${user.category}`} className='categorybtn'>
            //   <img src={schoolMerch} alt="" className='categoryPic'/>
            //   <p className='categoryTitle'>School Merchandise</p>
            // </Link>

          ))
        }  
          
        </div>
      {/* <Footer/> */}
    </div>
  )
}
export default Categories;