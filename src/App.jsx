import React from 'react';
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
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <div>
        <iframe data-aa='2228291' src='//ad.a-ads.com/2228291?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe></div>
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
