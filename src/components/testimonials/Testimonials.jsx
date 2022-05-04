import React from 'react';
import './testimonials.css';
import AVATR1 from '../../assets/avatar1.jpg'
import AVATR2 from '../../assets/avatar2.jpg'
import AVATR3 from '../../assets/avatar3.jpg'
import AVATR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  
  {
    avatar: AVATR1,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus odit autem placeat quisquam aspernatur. Velit est ratione ea eveniet nihil, delectus excepturi possimus! Nulla doloremque minima perspiciatis cum quod!'
  },

  {
    avatar: AVATR2,
    name: 'Emmanuel Joseph',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus odit autem placeat quisquam aspernatur. Velit est ratione ea eveniet nihil, delectus excepturi possimus! Nulla doloremque minima perspiciatis cum quod!'
  },

  {
    avatar: AVATR3,
    name: 'Mark ',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus odit autem placeat quisquam aspernatur. Velit est ratione ea eveniet nihil, delectus excepturi possimus! Nulla doloremque minima perspiciatis cum quod!'
  },

  {
    avatar: AVATR4,
    name: 'Jimoh Nana',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus odit autem placeat quisquam aspernatur. Velit est ratione ea eveniet nihil, delectus excepturi possimus! Nulla doloremque minima perspiciatis cum quod!'
  },

]



const Testimonials = () => {
  return (
    <section id='testimonials' avatar='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      > 
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>

    </section>
  )
}

export default Testimonials;
