import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
   <section className="max-container">
    <h1 className='head-text'>
      Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Ridan</span>
      </h1>

      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500'>
          Full stack developer with a passion for creating visually stunning 3D models and interactive experiences. I specialize in JavaScript, React, and WebGL. I'm always eager to learn and improve my skills. 
        </p>
      </div>

     
   </section>
  )
}

export default About
