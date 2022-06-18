import React from 'react'
/* import CV from '../../assets/cv.pdf' */
import CV2 from '../../assets/Ifeanyi_Vincent Okereke_Resume.pdf';


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV2} download='Okereke_Ifeanyi_Vincent_CV' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;
