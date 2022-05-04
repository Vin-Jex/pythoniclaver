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
                <small>100+ Completed</small>
              </article>
            </div>
            <h4>
              My name is <b>Okereke Vincent.</b> I'm a Junior Frontend Web Developer with over 2+ months of experience in the industry.
              <br /> My technical skills and knowledge of <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b> and <b>Web Designing</b> in general  will render me a valuable addition to your web development team. 
              <br />
              I'm passionate about developing interactive websites and web features to drive up online traffic and sales, bringing the company to greater heights and also to develop my technical ability for a Fast, Interactive and Secure Web Development.
            </h4>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
    
  )
}

export default About;
