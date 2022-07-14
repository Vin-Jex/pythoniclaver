import React, {Component } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  
  {
    id: 1,
    image: IMG1,
    title: 'Admin Dashboard Built with HTML, CSS, and JavaScript',
    github: 'https://github.com/pythoniclaver/Admin-Dashboard',
    demo: 'https://pythonichub-admin-dashboard.vercel.app/',
  },

  {
    id: 2,
    image: IMG2,
    title: 'A To-Do List Built with HTML, CSS, and JavaScript',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pythonichub-to-do-list.netlify.app',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Js Issue Tracker Built with HTML, Bootstrap, and Javascript',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://js-issue-tracker.vercel.app/',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Pig Game Built with HTML, CSS, Javascript (Not Mobile Responsive)',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pig-game-clone.vercel.app/',
  },

  {
    id: 5,
    image: IMG5,
    title: 'An eCommerce Website Built with HTML, CSS, JavaScript',
    github: 'https://github.com/pythoniclaverhttps://github.com/pythoniclaver/eCommerce-Website',
    demo: 'https://e-commerce-website-indol.vercel.app/',
  },

  {
    id: 6,
    image: IMG6,
    title: 'A Travel Website for Adventure Built with Reactjs',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pyhub.vercel.app/',
  },

]

export default class Portfolio extends Component {
  render() {
      return (
        <section id='portfolio'>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
    
          <div className="container portfolio__container">
            {
              data.map(({id, image, title, github, demo}) => {
                return (
                  <article className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target='_blank'  rel='noopener noreferrer'>GitHub</a>
                      <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </section>
      )
    
  }
}

// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {
//           data.map(({id, image, title, github, demo}) => {
//             return (
//               <article className="portfolio__item">
//                 <div className="portfolio__item-image">
//                   <img src={image} alt={title} />
//                 </div>
//                 <h3>{title}</h3>
//                 <div className="portfolio__item-cta">
//                   <a href={github} className='btn' target='_blank'  rel='noopener noreferrer'>GitHub</a>
//                   <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
//                 </div>
//               </article>
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default Portfolio
