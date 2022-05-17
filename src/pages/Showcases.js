import React from 'react'
import Helmet from 'react-helmet'
import { motion } from 'framer-motion';
// import { Grid } from '@material-ui/core';
import styled from 'styled-components';
// import hero2 from '../images/assets/background2.png';
import ourTool from '../images/icons/toolboxIcon.png';
// import gallery from '../images/icons/gallery_isometric.png';
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
// import rect from '../images/assets/rectangle.png';
import outerbub from '../images/assets/outerbub3.svg';
import user from '../images/assets/complete.jpg';



const Showcases = () => {
  return (
    <div>
      <PageLayout>
      <Helmet>
        <title>OmniSwift</title>
      </Helmet>
      {/* --------- Toppings -------- */}
      <Section className="hero-section">
        <div className="user">
          <img src={user} alt="" />
        </div>
        <motion.div animate={{ x: 20 }} className="bublow1">
          <img src={bublow} alt="blow" />
        </motion.div>
        <div className="group">
          <img src={group} alt="group" />
        </div>
        <div className="bubcen">
          <img src={bubcen} alt="bcen" />
        </div>
        <div className="outerbub">
          <img src={outerbub} alt="outer" />
        </div>
        <div className="bub">
          <img src={bublow} alt="bub" />
        </div>
        <div className="bubmid">
          <img src={bubmid} alt="bmid" />
        </div>
        <div className="bub5">
          <img src={bubmid1} alt="bub5" />
        </div>
        <div className="bub6">
          <img src={bublowright} alt="" />
        </div>
        <div className="cookie">
          <img src={cookie} alt="cookie" />
        </div>
                
          <motion.div animate= {{ x: 50}} className="hero-body-section">
                    <h1>
                        <span className='herobody'>First <br/> Impressions <br/> Matter</span></h1>
                        </motion.div>
                        <motion.div animate={{ x: 50 }}className='intro'>
                        <p>
                        <span>We can help you convert more prospects into <br/> leads and customers through our process.</span>
                    </p>
                        </motion.div>
                        <div>
                    <Link to={'/contact'} className='vertical-center'>
                      <Button> Get started </Button>
                    </Link>
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
                  <img src={ourTool} alt="Tool" /> </div>
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
                      <Button> Our Process </Button>
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
                      <Button> Showcases </Button>
                    </Link>
                </div> 
              </Section>
              
      </PageLayout>
      

    </div>
  )
}

const Section = styled.section`
height: 1024px;
width: 100%;
position: relative;
.background {
  height: 100%;
  img {
    // background-size: 300px 100px, cover;
    width: 100%;
    // height: 1000px;
    background-repeat: no-repeat;
    object-fit: contain;
    background: #FFFFFF;
    // linear-gradient(180deg, rgba(249, 249, 249, 0.29) -14.99%, rgba(85, 202, 255, 0.52) 118.32%);
  }
}`

const Button = styled.button`
  background-color: #0D4E99;
  color: white;
  font-weight: 800;
  font-size: 14px;
  border: none;
  padding: 12px 50px;
  border-radius: 50px;
  margin: 5px 50px;
  cursor: pointer;
  transition: all 150ms ease;
  // width: 330px;
  // height: 90px;
  // box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
`;
export default Showcases