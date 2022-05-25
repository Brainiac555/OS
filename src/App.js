import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import './index.css';
import Owlcarousel from './components/OwlCarousel';
import Showcases from './pages/Showcases'
import Products from './pages/Products'
import OurProcess from './pages/Our-Process'
import Contact from './pages/Contact'
import Card from './components/Card';
// import Slider from './components/slider/Slider.jsx'


const App = () => {
  return (
    <React.Fragment>
      <Card />
      {/* <Slider/> */}

      {/* <Owlcarousel/> */}
        <Routes>
          <Route path='/' element={<Showcases />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/our-process' element={<OurProcess />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;
