import React from 'react'
import aboutUsBGpic from '../assets/AboutUs.jpg'

export default function AboutUs() {
  return (
    <div>
      <div className='h-screen w-screen overflow-hidden'>
        <img src={aboutUsBGpic} alt="" className='aboutUs absolute bottom-0 w-full h-full object-cover -z-50' />
        <div className='xl:px-4 xl:py-20 pt-20'>
          <p className='text-8xl text-center font-black text-white font-poppins xl:py-10 lg:text-4xl lg:pt-4 lg:px-1'>About Us</p>
          <p className='text-center font-poppins text-xl text-white font-semibold xl:py-3 lg:py-4-10 lg:px-40 xl:px-72'>
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
          <p className='text-white font-poppins text-xl font-semibold text-end px-10 '>
            Connect with us: <br />
            0912-3345-679
          </p>
        </div>
      </div>
    </div>
  )
}
