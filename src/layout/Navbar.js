import React from 'react'
import { CiSearch } from "react-icons/ci";

import { useModal } from '../context/Context';

function Navbar() {

  const { toggleModal } = useModal();



  return (
    <nav>
      {/* <div> */}
      <div><h3>Subscribe</h3></div>
      <div><h1 className='playfair-display-header '>Large</h1></div>
      <div>

        <div>

          <span className='nav-search-icon'><CiSearch size={'25px'}/></span>
        </div>
 
        <div>

          <button className='nav-btn' onClick={ toggleModal }><h3>Write blog</h3></button>
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar