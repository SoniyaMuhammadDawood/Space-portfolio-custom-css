import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
       {/* Header */}
    <nav className='haeder'>
    <h1 className='port'>Soniya</h1>

    <ul className='ul-1'>
      <li><Link href={"/"} >Home</Link></li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/contact"}>Contact</Link></li>
   
    </ul>
    </nav>
    </div>
  )
}

export default Header