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
    name: 'Charlotte Steve',
    review: 'This is among the coolest portfolio website I have ever visited. A simple website with lot of cool features like animated scrolling. This website is just great 😍.'
  },

  {
    avatar: AVATR2,
    name: 'Emmanuel Joseph',
    review: `Pythonichub is a powerful website as it is easy-to-use. I can effortlessly navigate around, plus get up-to-your-game with interaction so I know my campaigne aren on track.`
  },

  {
    avatar: AVATR3,
    name: 'Mark',
    review: `If I haven't worked on a project with you, I will easily say this website was built by an AI 😂 . I will keeping visiting websites built by pythonichub as long as he keeps building.`
  },

  {
    avatar: AVATR4,
    name: 'Jimoh Nana',
    review: `Pythonichub is a dedicated and talented frontend engineer who helped my company solve our Frontend issues. He's one of the best Frontend Developer I have ever known. `
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
