import React from 'react'
/* import CV from '../../assets/cv.pdf' */
// import CV2 from '../../assets/Ifeanyi_Vincent Okereke_Resume_21-05-2022-11-00-52.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href='https://drive.google.com/file/d/14yKqWxiFMCH948gAs5YdCBzsyFm_EctH/view'
        /* download='Okereke_Ifeanyi_Vincent_CV' */
        target="_blank"
        rel='noreferrer'
        className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;