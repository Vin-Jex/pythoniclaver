import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

 const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
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
                <small>Over 1+ Year Working</small>
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
               <b>Vincent</b> is a Front-end developer who is passionate about using codes and designs to make ideas come to life.
              </span>
            
              
              <span className='span'> 
              If you want to collaborate on a project, please get in touch with me. <br /> I'm always open to new ideas. I do not itch!
              </span>

            </div>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
    
  )
}

export default About;
