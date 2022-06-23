import React from 'react';

function Navbar() {
 

  return (
    <div>
    <nav className='nav'>
    <span className='name'>Fida Shnakher</span>
    <ul className='ul1'>
      {/* <a href="FIDA--SHNAKHER-FE.pdf"><button class="download">Download cv</button></a> */}
      <button className='download'>Download cv</button>
      <li className='link'>About</li>
      <li className='link'>Projects</li>
     </ul>
    </nav>
    </div>
  )
}

export default Navbar