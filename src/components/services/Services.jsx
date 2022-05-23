import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className='service'>
              <div className="service__head">
                <h3>UI/UX Designs</h3>
              </div>

              <ul className='service__list'>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Apply interactive and visual designs.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>           
                 
              </ul>
          </article>
          {/* END OF UI/UX */}

          <article className='service'>
              <div className="service__head">
                <h3>Web Development</h3>
              </div>

              <ul className='service__list'>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Transform static designs into functional webpages</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Accessible Websites that looks great on any screen</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Styling User Interface components</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Working with APIs</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>{/* Sustainable projects that are well */} Sustainable, Documented & easy to maintain projects</p>
                  </li>                         
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Smooth interaction implementation</p>
                  </li>                         
              </ul>
          </article>
          {/* WEB DEVELOPMENT*/}

          <article className='service'>
              <div className="service__head">
                <h3>Content Creation</h3>
              </div>

              <ul className='service__list'>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>
                  <li>
                    <BiCheck  className='service__list-icon'/> 
                    <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </li>           
                 
              </ul>
          </article>
          {/* CONTENT CREATION */}

        </div>
    </section>
  )
}

export default Services