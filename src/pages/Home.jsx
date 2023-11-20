import React from 'react'
import NavBar from '../objects/navBar'
import Categories from '../objects/categories'
// import config from '../../utils/auth0'
import Featured from '../objects/Featured'

export default function Home() {
  return (
    <section className="bg-red-LightApricot h-full w-full">
        <NavBar/>
        <div className=" mx-64 ">
            <Categories/>
            <Featured/>
        </div>
    </section>

  )
}
