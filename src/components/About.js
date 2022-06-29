import React from 'react';
import Img1 from '../images/me.png';



function About() {

  return (
    <div id='about-section' >About
      <div className='about-img'>
        <img src={Img1} id='my-img' alt="me" />
      </div>
      <div className='about-box'>
        <h2>Hi, I'm Fida 🙋‍♀️.</h2>
        <p>
          I've gone a long way, I gained more skills at programming, however I still need a suitable platform to sharpen my abilities, so I'm looking forward to join a company that shares my values, and enables me to fulfill my potential</p>
        <p>In this website you can find all my communication channels, in addition to my projects, enjoy and feel free to contact me. </p>
      </div>
    </div>
  )
}

export default About