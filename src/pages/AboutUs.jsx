import React from 'react'
import aboutUsBGpic from '../assets/AboutUs.jpg'

export default function AboutUs() {
  return (
    <div>
      <div className='h-screen w-screen'>
        <img src={aboutUsBGpic} alt="" className='w-full  absolute -z-50 bottom-0'/>
        <div className='px-48 py-20'>
          <p className='text-8xl text-center font-black text-white font-poppins py-10'>About Us</p>
          <p className='text-center font-poppins text-xl text-white font-semibold py-10 px-72'>
            Welcome to EAC Express E-Commerce: Your One-Stop Shop for Educational Excellence
            We believe in making the educational experience seamless and convenient. Our online platform is dedicated to providing students, parents, and educators with a hassle-free way to access essential educational resources, merchandise, and services.
            <br /><br />
            Why Choose EAC Express?
            <br /><br />
            Wide Range of Products: Explore our curated selection of school supplies, uniforms, and exclusive EAC merchandise.
            <br /><br />
            User-Friendly Interface: Our easy-to-navigate website is designed with you in mind. Our intuitive interface makes the online shopping experience enjoyable and efficient.
            <br /><br />
            Join us in fostering a culture of excellence and convenience at EAC Express. Together, let's make the journey of education even more enriching. Thank you for choosing us as your preferred online destination for all things.
          </p>
        </div>
      </div>
    </div>
  )
}
