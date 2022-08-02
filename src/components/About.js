import React from 'react';
import Img1 from '../images/me.png';



function About() {

  return (
    <div id='about-section' >About
      <div className='about-img'>
        <img src={Img1} id='my-img' alt="me" />
      </div>
      <div className='about-box'>
        <h2>Hi I'm Fida 🙋‍♀️, Frontend web developer.</h2>
        <p>welcome to my portfolio.</p>
        <p>In this website you can find all my communication channels, in addition to my favorite projects, enjoy browsing and feel free to contact me. </p>
        <p>Scroll down to see my work.</p>
      </div>
    </div>
  )
}

export default About