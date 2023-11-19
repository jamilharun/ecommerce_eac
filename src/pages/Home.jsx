import React from 'react'
import NavBar from '../objects/navBar'
import Categories from '../objects/categories'
import config from '../../utils/auth0'

export default function Home() {
  return (
    <section className="bg-red-LightApricot h-screen w-full">
        <NavBar/>
        <div className=" mx-48 ">
            <Categories/>
          {/* <div>client id {config.clientId}</div> */}
        </div>
    </section>

  )
}
