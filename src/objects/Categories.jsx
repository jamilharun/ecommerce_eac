import React from 'react'

import medicalSupplies from '../assets/medicalSupplies.png'
import schoolEssentials from '../assets/schoolEssentials.png'
import schoolMerch from '../assets/schoolMerch.png'
import schoolUniform from '../assets/schoolUniform.png'
import { Link, Navigate } from 'react-router-dom'
export default function Categories() {
  return (
    <section className='mx-20'>
      
        <h1 className='text-3xl font-bold mt-32 mb-10'>Categories</h1>
        <div className='grid place-content-center grid-cols-4 place-items-center gap-20 '>
          <Link to='/productPage' className='categorybtn'>
            <img 
              src={schoolEssentials} alt="" className='categoryPic'/>
            <p className='categoryTitle'>School Essentials</p>
          </Link>
          <Link to='/productPage' className='categorybtn'> 
            <img src={medicalSupplies} alt="" className='categoryPic'/>
            <p className='categoryTitle'>Medical Supplies</p>
          </Link>
          <Link to='/productPage' className='categorybtn'>
            <img src={schoolUniform} alt="" className='categoryPic'/>
            <p className='categoryTitle'>School Uniform</p>
          </Link>
          <Link to='/productPage' className='categorybtn'>
            <img src={schoolMerch} alt="" className='categoryPic'/>
            <p className='categoryTitle'>School Merchandise</p>
          </Link>
        </div>
      
    </section>
  )
}
