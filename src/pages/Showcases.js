import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ourTool from '../images/icons/toolboxIcon.png';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import Phone1 from '../images/assets/Phone.png';
import bubright from '../images/assets/bubright1.png';
import bubleft from '../images/assets/bubleft.png';
import Design from '../images/icons/gallery_isometric.png';
import bubcen from '../images/assets/bub2.svg';
import bublow from '../images/assets/bub1.svg';
import bublowright from '../images/assets/bub6.svg';
import bubmid from '../images/assets/bub4.svg';
import bubmid1 from '../images/assets/bub5.svg';
import bubright1 from '../images/assets/bubright1.png';
import cookie from '../images/assets/cookie.png';
import group from '../images/assets/navbubble.svg';
import OwlCarousel from '../components/OwlCarousel';
import Carousel from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive';
// import rect from '../images/assets/rectangle.png';
import outerbub from '../images/assets/outerbub3.svg';
// import user from '../images/assets/complete.jpg';
import { ContainerButton } from '../components/ContainerButton';
import ImageSlider from '../components/ImageSlider';
import images from '../components/images';



const Showcases = ({ general }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});
  
  return (
    <div>
      <PageLayout>
      <Helmet>
        <title>OmniSwift</title>
      </Helmet>
      {/* --------- Toppings -------- */}
      <Section className="hero-section">
        <ImageSlider images={images}/>
      {/* ---------- Bubbles ----------- */}

        <motion.div animate={{ x: 20 }} className="bublow1">
          <img src={bublow} alt="blow" />
        </motion.div>
        <div className="group" style={{ }}>
          <img src={group} alt="group" />
        </div>
        <div className="bubcen" style={{ margin: '0 45px'}}>
          <img src={bubcen} alt="bcen" />
        </div>
        <div className="outerbub" >
          <img src={outerbub} alt="outer" />
        </div>
        <div className="bub" >
          <img src={bublow} alt="bub" />
        </div>
        <div className="bubmid" style={{ margin: '0 200px'}}>
          <img src={bubmid} alt="bmid" />
        </div>
        <div className="bub5" style={{ margin: '0 705px'}}>
          <img src={bubmid1} alt="bub5" />
        </div>
        <div className="bub6" style={{  margin: '0 1110px'}}>
          <img src={bublowright} alt="" />
        </div>
        <div className="cookie" style={{ margin: '0 640px'}}>
          <img src={cookie} alt="cookie" />
        </div>
         
                </Section>

              <Section className='hero-sectionbody'>
                
                {/* <div className="hero-lower">
                  <img src={hero2} alt="hero2" />
                  </div> */}
                  <div className='hero-phone'>
                    <img src={Phone1} alt="phone" />
                  </div>
                    <div className='bubright'>
                    <img src={bubright} alt="Bubbl" />
                    </div>
                    <div className="bubleft">
                      <img src={bubleft} alt="Bubble" />
                    </div>
                  <div className="hero2body">
                  <img src={ourTool} alt="Tool" /> 
                  </div>
                  <div className='intro2'>
                  <h2><span> Our Toolbox </span></h2>
                  </div>
                   <div className='intro3'>
                   <p>
                      We are a full-stack web development team with skills ranging from <b>Laravel, Vuejs</b> and <br/> <b>ReactJS</b>. Our work is highly
                      focused on both business strategy and technical execution.</p>
                      </div>
                      <div className='intro4'>
                      <p>
                      We take pride in our work and so much more in the
                      conversations we have about it. <br /> We’d
                      love to talk shop, over coffee, with you.
                      </p>
                      </div> 
                      <div>
                    <Link to={'/our-process'} className='process-button'>
                      <ContainerButton> Our Process </ContainerButton>
                    </Link>
                </div>  

                <div className="Design">
                  <img src={Design} alt="Design" />
                  </div>                   
                  
                  <div className="design-intro2">
                    <h2><span>Design</span></h2>
                  </div>
                  <div className="design-intro3">
                    <p>
                      At Omniswift, design is not just a deparment. It's a <b>way of thinking <br/> and working</b>,
                      based on the belief that design is not just how <br/> something looks, but also how it works.
                    </p>
                  </div>
                  <div className="design-intro4">
                    <p>It's the driving force behind product development, service <br/> 
                    offerings, customer experience and company culture. We believe <br/>
                    that great design starts with <b>empathy</b>. Who are your users? What <br/>
                    do they value? How do they believe? </p>
                  </div>
                  <div>
                    <Link to={'/'} className='showcases-button'>
                      <ContainerButton> Showcases </ContainerButton>
                    </Link>
                </div> 
              </Section>
              
      </PageLayout>
      

    </div>
  )
}

const Section = styled.section`
height: 1024px;
// width: 100%;
position: relative;

}`

// const Button = styled.button`
//   background-color: #0D4E99;
//   color: white;
//   font-weight: 800;
//   font-size: 14px;
//   border: none;
//   padding: 12px 50px;
//   border-radius: 50px;
//   margin: 5px 50px;
//   cursor: pointer;
//   transition: all 150ms ease;
//   width: 330px;
//   height: 90px;
//   box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
// `;
export default Showcases