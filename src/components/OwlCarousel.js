// import React, { Component } from 'react';
// import Slider from 'react-slick';
// import images from '../components/images';


// export default class AutoPlay extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 50,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,

//       cssEase: "linear"
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           {[images].map((item, index) => {
//             return (
//               <div key={index}>
//                 <h1 style={{ color: 'red', fontSize: '100', textAlign: 'center'}}>
//                 {item}
//                 </h1>
//                 </div>
//             )
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from "@material-ui/core";
// import 'react-responsive-carousel/lib/styles/carousel/min.css';
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../images/assets/1.jpg';
import Img2 from '../images/assets/2.jpg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


const OwlCarousel = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 800px )'});

  const items = [
    {
      header: 'First Impression Matters',
      body: 'We can help you convert more prospects into <br/> leads and customers through our process.',
      link: '/contact',
      image: Img1
    },
    {
      header: 'First Impression Matters',
      body: 'We can help you convert more prospects into <br/> leads and customers through our process.',
      link: '/contact',
      image: Img2
    },
  ]
  return (
    <div>
      <Carousel 
      autoPlay='true'
      infiniteLoop={true}
      showArrows={false}
      showIndicators={true}
      showThumbs={false}
      showStatus={false}
      >
        {
          items.map((item, key) => (
            <div key={key} style={{ width: '100%'}}>
              <main className="hero-section">
                <div className='hero-div'>
                  <div className="container">
                    <div className="hero-card">
                      <Box style={{ padding: '1rem'}}>
                        <h1 
                        style={{ 
                          width: '100%',
                          lineHeight: '110%',
                          fontSize: '3.8rem',
                          textAlign: 'left',
                          }}
                          className='animate__animated animate__fadeInLeft'
                        >
                          {item.header}
                        </h1>
                        <p
                        style={{
                          fontSize: '14px',
                          textAlign: 'left',
                          lineHeight: '170%',
                          marginTop: isMobile ? 0 : '-4%'
                        }}
                        className='animate__animated animate__fadeInLeft justify'
                        >
                          {item.body}
                        </p>
                        <Link to={item.link}>
                          <button className='homeHero-btn' 
                          style={{
                            cursor: 'pointer',
                            marginTop: '-1%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            color: 'white',
                            border: 'none',
                            padding: '12px 50px',
                            background: '#0D4E99',
                            }}>
                              {item?.linkText || 'Get Started'}
                          </button>
                        </Link>
                      </Box>
                    </div>
                  </div>
                  <img 
                  src={item.image} alt="hero_img"
                  style={{ width: '65%' }} 
                  className='animate__animated animate__fadeInRight'/>
                </div>

              </main>
            </div>
          ))
        }
      </Carousel>

    </div>
  );
};

export default OwlCarousel