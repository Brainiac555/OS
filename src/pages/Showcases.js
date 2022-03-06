import React from 'react'
import Helmet from 'react-helmet'
import { Grid } from '@material-ui/core';
import hero from '../images/assets/Background.png';
import styled from 'styled-components';
// import Button from 'styled-components'
import hero2 from '../images/assets/background2.png';
import ourTool from '../images/icons/toolboxIcon.png';
import gallery from '../images/icons/gallery_isometric.png';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom'


const Showcases = () => {
  return (
    <div>
      <PageLayout>
      <Helmet>
        <title>OmniSwift</title>
      </Helmet>
      <Section className="hero-section">
                <div className="background">
                 <img src={hero} alt="Hero" />
                </div>
          <div className="hero-body-section">
                    <h1 style={{ fontWeight: "bold" }}>
                        <span className='herobody' style={{fontSize: '70px', 
                        transform: 'translateY(150%)', margin: '5px 35px' }}>First <br/> Impressions <br/> Matter</span></h1>
                        <p
                        style={{
                            fontSize: "16px",
                            width:"100%",
                            textAlign: "left",
                            fontWeight: "400p%",
                            transform: 'translateY(300%)', 
                            margin: '5px 55px',
                            lineHeight: '25px'}}>
                        We can help you convert more prospects into <br/>leads and customers through our process.
                    </p>
                    <Link to={'/contact'}>
                      <Button className='vertical-center' > Get started </Button>
                    </Link>
                </div>
                </Section>

              <Section className='hero-sectionbody'>
                <Grid>
                <div className="hero-bodysection" 
                style={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        }}>
                  <img src={hero2} alt="hero2" 
                  style={{ width: "90%" }} />
                  <div className="hero2body">
                  <img src={ourTool} alt="Tool" style={{ margin: '40px -100px', transform: 'translateY(-160%)'}} />
                    <h2><span style={{ margin: '40px -100px', textAlign: 'center',  transform: 'translateY(-1650%)'}}> Our Toolbox </span> </h2>
                      <p style={{ width: '45rem', margin: '40px -100px', textAlign: 'center', fontWeight: '600', transform: 'translateY(-1650%)' }}>
                      We are a full-stack web development team with skills ranging from <b>Laravel, Vuejs</b> and <b>ReactJS</b>. Our work is highly
                      focused on both business strategy and technical execution.</p>
                      <p>
                      We take pride in our work and so much more in the
                      conversations we have about it. We’d
                      love to talk shop, over coffee, with you.
                      </p>
                  </div>
                  
                </div>
                <div className="hero3body" 
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
              }}> 
                    <img src={gallery} alt="gallery" style={{}} />
                    <h2><span>Design</span></h2>
                  <p style={{ width: "50%" }}>
                  At Omniswift, design is not just a department. It's a way of <b>thinking
                  and working,</b> based on the belief that design is not just how
                  something looks, but also how it works.</p>
                  <p> It's the driving force behind product development, service
                  offerings, customer experience and company culture. We believe
                  that great design starts with <b>empathy.</b> Who are your users? What
                  do they value? How do they behave?
                  </p>
                </div>
                </Grid>
              </Section>
      </PageLayout>
      

    </div>
  )
}

const Section = styled.section`
height: 1080px;
width: 100%;
position: relative;
.background {
  height: 100%;
  img {
    background-size: 300px 100px, cover;
    width: 100%;
    height: 1000px;
    background-repeat: no-repeat;
    object-fit: contain;
    background: #FFFFFF;
    // linear-gradient(180deg, rgba(249, 249, 249, 0.29) -14.99%, rgba(85, 202, 255, 0.52) 118.32%);
  }
}`

const Button = styled.button`
  background-color: #0D4E99;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 100px;
  margin: 5px 50px;
  cursor: pointer;
  transition: all 150ms ease;
  // box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
`;
export default Showcases