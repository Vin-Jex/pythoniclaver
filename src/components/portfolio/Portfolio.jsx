import React, {Component } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.png'


const data = [
  
  {
    id: 1,
    image: IMG1,
    technology: [ 'HTMl5', 'CSS3', 'JavaScript' ],
    title: 'Pythonichub Admin Dashboard help you and your employees to analyze and manage the performance of a web application.',
    github: 'https://github.com/pythoniclaver/Admin-Dashboard',
    demo: 'https://pythonichub-admin-dashboard.vercel.app/',
  },

  {
    id: 2,
    image: IMG2,
    technology: ['HTMl5', 'CSS3', 'JavaScript', 'Bootstrap'],
    title: 'Pythonichub To-Do List is a website that help people to create, keep track and update the list of things that one wants to get done or that need to get done.',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pythonichub-to-do-list.netlify.app',
  },

  {
    id: 7,
    image: IMG7,
    technology: [ 'Reactjs', 'React Routing', 'queryString' ],
    title: "GitHub Battle helps developers and company's to know how productive they've been by comparing their username with a third party username in order to get each persons stat.",
    github: 'https://github.com/pythoniclaver',
    demo: 'https://github-repo-battle.vercel.app/',
  },

  {
    id: 3,
    technology: ['HTML5', 'Bootstrap', 'CSS3', 'JavaScript'],
    image: IMG3,
    title: 'Pythonichub Issue Tracker is a single webpage for issue tracking purposes to get a detailed list of various issues and their status.',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://js-issue-tracker.vercel.app/',
  },

  {
    id: 4,
    image: IMG4,
    technology: [ 'HTMl5', 'CSS3', 'Vannila JavaScript', 'Desktop-only' ],
    title: 'Pythonichub Pig Game is a simple dice game with two players.', 
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pig-game-clone.vercel.app/',
  },

  {
    id: 5,
    image: IMG5,
    technology: [ 'HTMl5', 'CSS3', 'JavaScript' ],
    title: 'Pythonichub Business Service is the UI to the backend of an E-commerce website that helps it users ease shopping stress by providing all they need in one place.',
    github: 'https://github.com/pythoniclaverhttps://github.com/pythoniclaver/eCommerce-Website',
    demo: 'https://e-commerce-website-indol.vercel.app/',
  },

  {
    id: 6,
    image: IMG6,
    technology: [ 'Reactjs', 'React Routing', 'React Icons' ],
    title: 'Pyhub is a web application that provides travel reviews, trip fares, or a combination of both for the best travel experience.',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pyhub.vercel.app/',
  },

]


let languages = data.technology

console.log(languages);

if ( languages === 'Reactjs' ) {
  languages = [
    'Reactjs', 'React Routing', 'queryString'
  ]
} else if( languages === 'HTML' ) {
  languages = [
    'HTMl5', 'CSS3', 'JavaScript'
  ]
  
}else if( languages === 'Bootstrap' ) {
  languages = [
    'HTMl5', 'CSS3', 'JavaScript', 'Bootstrap'
  ]   
} else if( languages === 'React' ) {
  languages = [
    'Reactjs', 'React Routing', 'React Icons'
  ]
} else {
  languages = [
    'HTMl5', 'CSS3', 'JavaScript'
  ]
}


export default class Portfolio extends Component {
  render() {
      return (
        <section id='portfolio'>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
    
          <div className="container portfolio__container">
            {
              data.map(({id, image, title, github, demo, technology}) => {
                return (
                  <article className="portfolio__item" key={id}>
                    <div className="portfolio__item-image" >
                      <img src={image} alt={title} />
                    </div>
                    <div className='technology'>
                        { typeof(technology) =='object' && 
                        technology.map(((value) => (
                          <button key={value} className='btn technology'>{value}</button>
                          ))
              )}
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
