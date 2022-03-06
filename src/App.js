import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import './index.css';
import Showcases from './pages/Showcases'
import Products from './pages/Products'
import Our from './pages/Our'
import Contact from './pages/Contact'
import Card from './components/Card'



const App = () => {
  return (
    <React.Fragment>
      <Card
      title='Card Title'
      imageUrl=''
      body='Lorem ipsum dolor sit amet consectrtur' />
        <Routes>
          <Route path='/' element={<Showcases />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/our-process' element={<Our />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </React.Fragment>
  );
}

export default App;
