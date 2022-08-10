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
    technology: [ 'HTMl5', 'CSS3', 'JavaScript', 'Font Awesome' ],
    title: 'Admin Dashboard',
    github: 'https://github.com/pythoniclaver/Admin-Dashboard',
    demo: 'https://pythonichub-admin-dashboard.vercel.app/',
  },

  {
    id: 2,
    image: IMG2,
    technology: [ 'HTMl5', 'CSS3', 'JavaScript', 'Bootstrap' ],
    title: 'A To-Do List',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pythonichub-to-do-list.netlify.app',
  },

  {
    id: 3,
    technology: [ 'HTML5', 'Bootstrap', 'CSS3', 'JavaScript' ],

    image: IMG3,
    title: 'Js Issue Tracker',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://js-issue-tracker.vercel.app/',
  },

  {
    id: 4,
    image: IMG4,
    technology: [ 'HTMl5', 'CSS3', 'JavaScript' ],
    title: 'Pig Game (Not Mobile Responsive)',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pig-game-clone.vercel.app/',
  },

  {
    id: 5,
    image: IMG5,
    technology: [ 'HTMl5', 'CSS3', 'JavaScript', 'Font Awesome' ],
    title: 'An eCommerce Website',
    github: 'https://github.com/pythoniclaverhttps://github.com/pythoniclaver/eCommerce-Website',
    demo: 'https://e-commerce-website-indol.vercel.app/',
  },

  {
    id: 6,
    image: IMG6,
    technology: [ 'Reactjs', 'React Routing', 'React Icons' ],
    title: 'A Travel Website for Adventure',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pyhub.vercel.app/',
  },

  {
    id: 7,
    image: IMG6,
    technology: [ 'Reactjs', 'React Routing', 'queryString' ],
    title: 'GitHub Battle compares two users and return a winner and a loser based on their stat.',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://github-repo-battle.vercel.app/',
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
    'HTMl5', 'CSS3', 'JavaScript', 'Font Awesome'
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
