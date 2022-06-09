import React from 'react'
import {FaBloggerB} from 'react-icons/fa'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Lucas Cardoso All rights reserved</p>
      <p className="icons">
        <Link href="http://actuallyme.netlify.app/ " target="_blank" rel="noopener noreferrer">
          <FaBloggerB/>
        </Link> 
      </p>
    </div>
  )
}

export default Footer