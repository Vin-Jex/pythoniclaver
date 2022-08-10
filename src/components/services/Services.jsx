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
            <small className=''><i>Available</i></small>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Transform PSD to React/HTML Website.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Transform Adobe XD to React/HTML Website.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Transform Figma to React/HTML Website.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Transform Sketch to React/HTML Website.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Transform Images to React/HTML Website.</p>
            </li>           
                 
          </ul>
        </article>
          {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
            <small className=''><i>Available</i></small>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Ability to write clean and reusable codes.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Cross-browser compatibility.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Styling User Interface components to have a stunning look.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Adding features and animations for attractive and user-friendly websites.</p>
              </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
                <p>{/* Sustainable projects that are well */} Sustainable, Documented & easy to maintain projects.</p>
            </li>                         
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Smooth interaction implementation.</p>
            </li>                         
          </ul>
        </article>
        {/* WEB DEVELOPMENT*/}

        <article className='service'>
          <div className="service__head">
            <h3>More Skills</h3>
            <small className=''><i>Available</i></small>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Debugging ability.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>On-time delivery.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Working with APIs.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Keen on pixel perfect designs.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Modern Interface Development.</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/> 
              <p>Googling ability :)</p>
            </li>
          </ul>
        </article>
          {/* CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services