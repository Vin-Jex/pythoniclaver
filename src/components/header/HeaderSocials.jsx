import React from 'react';
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://linkedin.com/in/pythonichub'
      >
        <BsLinkedin />
      </a>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://github.com/pythoniclaver'
      >
        <FaGithub />
      </a>
      <a target='_blank' href='https://twitter.com/vincent_coder' rel='noreferrer'>
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;