import Slider from 'react-slick';
import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ContainerButton } from '../components/ContainerButton';

const ImageSlider = ({images}) => {
   const settings ={ 
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyload: true,
      autoplaySpeed: 5000,
      autoplay: true,
      speed: 3000,
      cssEase: 'linear'
   };
   return (
      <>
      <div >
         <Slider {...settings}>
            {images.map(
               (item, key) => (
               <Box style={{ padding: '1rem' }}>
                  
                  
               
               <div style={{
                  position: 'absolute',

               }}>
               <div className="overlay" key={key} >
                  <h1 style={{
                     width: '30%',
                     lineHeight: '1',
                     // margin: '0 246px'
                  }}>
                     {item.header}
                  </h1>
                  </div>
                  <div className= 'overlay2' key={item}>
                  <p style={{
                     fontSize: '14px',
                     textAlign: 'left'
                  }}>
                     {item.body}
                  </p>
                  </div>
                  <div className="overlay3" style={{ margin: '0 50px', transform: 'translateY(600%)'}}>
                  <Link to={item.link} >
                  <ContainerButton >
                  { item?.linkText || 'Get Started' }
                  </ContainerButton>
                  </Link>
                  </div>
                  
                  </div>
                  <div className="imgslider">
                  <img src={item.image} alt="item.img" />
                  </div>
               </Box>
            ))}
         </Slider>
         

         
      </div>
      
      </>
   )
}

export default ImageSlider;