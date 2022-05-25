import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

 have About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Months Working</small>
              </article>

              <article className='about__card'>
                <FaAward className="about__icon" />
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>30+ Completed</small>
              </article>
            </div>
            <div  className='text__container'>
              <span className='span'>
                {/* My name is <b>Okereke Vincent.</b>  */}I'm an HTML, CSS, and JavaScript-savvy Frontend Web Developer. I am highly interested about learning and putting ideas into action using codes and designs.
              </span>
                  <br /> <br />
              <span className='span'> 
              I knew I was hooked into the world of website development the instant I printed "Hello World!" in the console of my first application. Web development has never been just a profession for me; it has always been a fun way to keep learning and increase my ability to interpret website UI designs accurately and transform them into responsive websites.
              </span>     

            </div>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
    
  )
}

export default About;
