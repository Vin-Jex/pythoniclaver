import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header___container">
          <h5>Hello I'm</h5>
          <h1>Vincent Okereke</h1>
          <h5 className="text-light">
              Front End Engineer
          </h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>
            Scroll Down
          </a>
        </div>
    </header>
  )
}

export default Header
