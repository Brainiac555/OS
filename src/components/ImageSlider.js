import Slider from 'react-slick';
import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ContainerButton } from '../components/ContainerButton';

const ImageSlider = ({images}) => {
   const settings ={ 
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyload: true,
      autoplaySpeed: 3000,
      autoplay: true,
      speed: 3000,
      cssEase: 'linear'
   };
   return (
      <>
      {/* <div clasName= 'hero' style={{
         fontSize: '1.8rem',
         fontWeight: '700',
         fontFamily: 'Poppins, sans-serif',
         // transform: 'translateY(100%)'
      }}>
         <h1> First Impressions Matter</h1>

         
      </div> */}
      <div >
         <Slider {...settings}>
            {images.map((item) => (
               <Box style={{ padding: '1rem' }}>
                  
                  
               
               <div style={{
                  position: 'relative',

               }}>
               <div className="overlay" >
                  <h1 style={{
                     width: '25%',
                     lineHeight: '1.2',
                  }}  className='herobody'>
                     {item.header}
                  </h1>
                  </div>
                  <div className= 'overlay2'>
                  <p style={{
                     fontSize: '14px',
                     textAlign: 'left'
                  }}>
                     {item.body}
                  </p>
                  </div>
                  <div className="overlay3">
                  <Link to={item.link}>
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