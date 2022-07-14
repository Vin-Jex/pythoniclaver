import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import './index.css';

const App = () => {
  return (
    <div className='wrapper'>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;


// const App = () => {
//   return (
//     <div classname='wrapper'>
//         <Header />
//         <Nav />
//         <About />
//         <Experience />
//         <Services />
//         <Portfolio />
//         <Testimonials />
//         <Contact />
//         <Footer />
//     </div>
//   )
// }

// export default App;
