import  React   from 'react';
import Img1 from '../images/me.png';



function About() {

  return (
    <div id='about-section' >About
    <div className='about-img'>
    <img src={Img1} id='my-img'  alt="me" />
    </div>
    <div className='about-box'>
      
      <p>The world is constantly changing, and so does my personality, intrests, perspective, skills and ambitions. 
        It's part of our duty as human beings to make the world better for generations to come, even the smallest gesture can make a huge impact,just like how we saw that one tweet or post can change a global economic status so does our personal prints. <br />
        To me pivoting from sales career wasn't just an update, it was more a leap of faith, a black mirror that I chose to put infront of me, daring to re-persue my dream, at the age of 29 that required me leave my comfort zone, sucess and support weren't guranteed, but this time I dared.
      </p>
      <p>I started my journey in Full-Stack|Front-End development, that has enabled me to bring out my creativity and for the first time experiencing hands on programming.<br />
      I've gone a long way, I gained more skills at programming, however I still need a suitable platform to sharpen my abilities, so I'm looking forward to join a company that shares my values, and enables me to fulfill my potential.</p>
      <h2>Hi, I'm Fida 🙋‍♀️.</h2>
      <p>In this website you can find all my communication channels, in addition to my projects, enjoy and feel free to contact me. </p>
    </div>
    </div>
  )
}

export default About