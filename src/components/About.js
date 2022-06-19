import React from 'react';
import Img1 from '../images/me.png'

function About() {
  return (
    <div id='about-section'>About
    <div className='about-img'>
    <img src={Img1} id='my-img'  alt="me" />
    </div>
    <div className='about-box'>
      <h2>Hi, I'm Fida</h2>
      <p>I'm starting my journey in front-end development, looking forward to join a company that shares my values, and enables me to fulfill my potential.</p>
    </div>
    </div>
  )
}

export default About