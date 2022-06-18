import React from 'react';

function Navbar() {
  return (
    <div>
    <nav className='nav'>
    <span class="name">Fida Shnakher</span>
    <ul className='ul1'>
      {/* <a href="FIDA--SHNAKHER-FE.pdf"><button class="download">Download cv</button></a> */}
      <button class="download">Download cv</button>
      <li>About</li>
      <li>Projects</li>
    </ul>
    </nav></div>
  )
}

export default Navbar