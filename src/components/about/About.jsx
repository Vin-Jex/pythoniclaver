import React from 'react';
import './about.css';
import ME from '../../assets/IMG_0549.jpeg'
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
      <h5 className='text-light position'>Front End Engineer</h5>

      <CTA />

      <div className='container about__container'>
        <HeaderSocials />
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Over 2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>FinTech Startup</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <div className='text__container'>
            <span className='span'>
              {/* My name is <b>Okereke Vincent.</b>  */}
              {/* I'm a <b>Front End Engineer</b>who is passionate about using codes
              and designs to make ideas come to life. */}
            </span>

            <span className='span'>
              {/* My name is <b>Okereke Vincent.</b>  */}
              As a <b>Front End Engineer</b>, I ignite ideas with my fiery
              passion for coding and design. Let's bring your vision to life!
              I'm always ready to spark new collaborations, so don't hesitate to
              reach out. And no, I don't have an itch for mediocrity, just a
              burning desire for innovation.
              
              {/* I'm a <b>Front End Engineer</b>who
              is passionate about using codes and designs to make ideas come to
              life. */}
            </span>

            {/* <span className='span'>
              If you want to collaborate on a project, please get in touch with
              me. <br /> I'm always open to new ideas. I do not itch!
            </span> */}

            {/* As a Front End Engineer, I ignite ideas with my fiery passion for coding and design. Let's bring your vision to life! I'm always ready to spark new collaborations, so don't hesitate to reach out. And no, I don't have an itch for mediocrity, just a burning desire for innovation. */}

            {/* As a seasoned Front-End Engineer, I bring 2+ years of blazing experience in designing, developing, and testing cutting-edge web solutions for various industries. I ignite innovation and skyrocket web traffic, driving substantial revenue growth. My design acumen and technical know-how, combined with a love for creativity, make me a firecracker in the field. I am a self-starter, fueled by a passion to create user-friendly, easy-to-manage web applications that leave a lasting impact. Ready to ignite my next challenge, I am eager to unleash my skills and ignite success as a Front-End Engineer. */}
          </div>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </section>
  );
}

export default About;
