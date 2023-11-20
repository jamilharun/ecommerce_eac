import React from 'react'
import imageError from '../assets/file-not-found.jpg'

export default function Featured() {
    var error = "error";

    return (
    <section>
        <div className="featuredBox grid grid-cols-3 gap-4 w-full place-items-center mt-20" >
            <div className="featureItems ">
                <img src={imageError} alt={error}/>

            </div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
            <div className="featureItems"><img src="" alt="" /></div>
        </div>
    </section>
    )
}
