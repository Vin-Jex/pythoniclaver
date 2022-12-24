import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import HeaderSocials from '../header/HeaderSocials';
import CTA from '../header/CTA';

 const About = () => {
  return (
    <section id='about'>
        <h5>Hello I'm</h5>
        <h1>Vincent Okereke</h1>
        <h5 className="text-light position">
            Front End Engineer
        </h5>

        <CTA />


        <div className="container about__container">
          
          <HeaderSocials />
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Over 2+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>FinTech Startup</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>50+ Completed</small>
              </article>
            </div>
            <div  className='text__container'>
              <span className='span'>
                {/* My name is <b>Okereke Vincent.</b>  */}
               I'm a <b>Front End Engineer</b>who is passionate about using codes and designs to make ideas come to life.
              </span>
            
              
              <span className='span'> 
              If you want to collaborate on a project, please get in touch with me. <br /> I'm always open to new ideas. I do not itch!
              </span>

            </div>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          <a href="#contact" className='scroll__down'>
            Scroll Down
          </a>
        </div>
    </section>
    
  )
}

export default About;
