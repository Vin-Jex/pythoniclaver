import React, {Component } from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio7.png'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio5.png'
import IMG4 from '../../assets/homepage.jpeg'
import IMG5 from '../../assets/portfolio3.jpg'
import IMG6 from '../../assets/portfolio4.jpg'

import IMG7 from '../../assets/portfolio6.jpg'



const data = [

  {
    id: 1,
    image: IMG1,
    /* technology: [ 'Reactjs', 'React Routing', 'QueryString', 'Webpack' ], */
    title: "GitHub Battle for repository stat comparism.",
    github: 'https://github.com/pythoniclaver/My-Portfolio',
    demo: 'https://github-repo-battle.vercel.app/',
  },

  {
    id: 2,
    image: IMG2,
    /* technology: [ 'HTMl5', 'CSS3', 'JavaScript' ], */
    title: 'Pythonichub Admin Dashboard to manage and analyze website performance.',
    github: 'https://github.com/pythoniclaver/Admin-Dashboard',
    demo: 'https://pythonichub-admin-dashboard.vercel.app/',
  },

  {
    id: 3,
    image: IMG3,
    /* technology: [ 'HTMl5', 'CSS3', 'JavaScript' ] ,*/
    title: `Pythonichub e.commerce for product and services offerings.`,
    github: '   https://github.com/pythoniclaver/eCommerce-Website',
    demo: 'https://e-commerce-website-indol.vercel.app/',
  },
  
  {
    id: 4,
    image: IMG4,
    /* technology: ['HTMl5', 'CSS3', 'JavaScript', 'Bootstrap'], */
    title: 'Mra conference application to improve productivity.',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://vimeo.com/744000819',
  },

  {
    id: 5,
    /* technology: ['HTML5', 'Bootstrap', 'CSS3', 'JavaScript'], */
    image: IMG5,
    title: 'Pythonichub Issue Tracker for issue reporting.',
    github: 'https://github.com/pythoniclaver',
    demo: 'https://js-issue-tracker.vercel.app/',
  },

  {
    id: 6,
    image: IMG6,
    /* technology: [ 'HTMl5', 'CSS3', 'Vannila JavaScript', 'Desktop-only' ] ,*/
    title: 'Pythonichub Pig Game a simple dice game for fun.', 
    github: 'https://github.com/pythoniclaver',
    demo: 'https://pig-game-clone.vercel.app/',
  },

  // {
  //   id: 7,
  //   image: IMG6,
  //   /* technology: [ 'Reactjs', 'React Routing', 'React Icons' ] ,*/
  //   title: 'Travesy',
  //   github: 'https://github.com/pythoniclaver',
  //   demo: 'https://pyhub.vercel.app/',
  // },

]


// let languages = data.technology

// console.log(languages);

// if ( languages === 'Reactjs' ) {
//   languages = [
//     'Reactjs', 'React Routing', 'queryString'
//   ]
// } else if( languages === 'HTML' ) {
//   languages = [
//     'HTMl5', 'CSS3', 'JavaScript'
//   ]
  
// }else if( languages === 'Bootstrap' ) {
//   languages = [
//     'HTMl5', 'CSS3', 'JavaScript', 'Bootstrap'
//   ]   
// } else if( languages === 'React' ) {
//   languages = [
//     'Reactjs', 'React Routing', 'React Icons'
//   ]
// } else {
//   languages = [
//     'HTMl5', 'CSS3', 'JavaScript'
//   ]
// }


export default class Portfolio extends Component {
  render() {
      return (
        <section id='portfolio'>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
    
          <div className="container portfolio__container">
            {
              data.map(({id, image, title, github, demo /* technology */}) => {
                return (
                  <article className="portfolio__item" key={id}>
                    <div className="portfolio__item-image" >
                      <img src={image} alt={title} />
                    </div>
                   {/*  <div className='technology'>
                        { typeof(technology) =='object' && 
                        technology.map(((value) => (
                          <button key={value} className='btn technology'>{value}</button>
                          ))
              )}
                    </div> */}
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
