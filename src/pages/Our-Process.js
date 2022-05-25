import React from 'react';
import { Link } from 'react-router-dom'
import ourProcess from '../images/assets/OurProcess.png';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card'
import { ContainerButton } from '../components/ContainerButton';


const OurProcess = () => {
  return (
    <div>
      <PageLayout>
      <Section className='process-section'>
        <div className='process-background'>
          <img src={ourProcess} alt='process' />
        </div>
        <div className='process-body-section'>
          <h1>
            <span>Educational<br/> Institutions</span></h1>
            </div>
            <div className='process-intro'>
            <p>
          We work with educational institutions to help them use <br/>
           Technology to make their education programs accessible to <br/> people all over the world.</p>
           </div>
           <div className='process-intro2'>
             <p>
           We improve Accessibility through <b>software</b>, <b>portals</b>, 
             interactive <br/> <b>websites</b>, and <b>trainings.</b>
          </p>
        </div>
        <div>
                    <Link to={'/contact'} className='process-button'>
                      <ContainerButton> Get Started </ContainerButton>
                    </Link>
                </div> 
      </Section>
      <Section>
        <div className="process-lower-intro">
          <img src="" alt="" />
        </div>
        <div className="process-lower-intro2">
          <h1>
            <span>
              Businesses
            </span>
          </h1>
        </div>
        <div className="process-lower-intro3">
          <h2>
            Do you want to grow your business?
          </h2>
        </div>
        <div className="process-lower-intro4">
          <p>
            Omniswift is about turning data into better decisions so<br/>
            you know what to do next. We develop technology platforms that<br/>
            help <b>businesses grow</b> by making them <b>smarter</b> and <b>more<br/>efficient</b>,
            and giving the right people at your company the<br/>
            information they need to make better decisions.
          </p>
        </div>
      </Section>
      </PageLayout>
      
    </div>
  )
}

const Section = styled.section`
height: 90vh;
width: 100%;
position: relative;
.background {
  height: 100%;
  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
  }
`

export default OurProcess