import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href='https://drive.google.com/file/d/14yKqWxiFMCH948gAs5YdCBzsyFm_EctH/view'
        target="_blank"
        rel='noreferrer'
        className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;
