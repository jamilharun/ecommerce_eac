import React from 'react'

export default function Categories() {
  return (
    <section>
      <div className='grid place-content-center grid-cols-5 mt-10 gap-20 '>
        <div className='categorybtn'>
          <p>Uniforms</p>
          {/* <div>
            <div>Engineering Polo</div>
            <div>Engineering Pants</div>
            <div>Nurcing shirt</div>
            <div>Nurcing Pants</div>
            <div>Nurcing gown</div>
            <div>Eac Civilian T-shirt</div>
            <div>Eac Civilian Jacket</div>
            <div>Nect tie</div>
          </div> */}
        </div>
        <div className='categorybtn'>
          <p>Books & Literatures</p>
          {/* <div>
            <div>Calculus Lecture</div>
            <div>Anatomy Lecture</div>
            <div>Psychology Lecture</div>
            <div>Engineering Lectures</div>
          </div> */}
        </div>
        <div className='categorybtn'>
          <p>Accesories</p>
          {/* <div>
            <div>Eac Hat</div>
            <div>ID lace</div>
          </div> */}
        </div>
        <div className='categorybtn'>
          <p>Appliances</p>
          {/* <div>
            <div></div>
            <div></div>
          </div> */}
        </div>
        <div className='categorybtn'>
          <p>Tools</p>
        </div>
      </div>
    </section>
  )
}
