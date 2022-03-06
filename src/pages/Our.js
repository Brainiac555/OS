import React from 'react';
import ourProcess from '../images/assets/OurProcess.png';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card'


const Our = () => {
  return (
    <div>
      <PageLayout>
      <Section className='process-section'>
        <div className='process-background'>
          <img src={ourProcess} alt='process' />
        </div>
        <div className='process-body-section'>
          <h1 style={{fontSize: "20px",
              width:"100%",
              textAlign: "left",
              fontWeight: "200",}}>
            <span>Educational<br/> Institutions</span>
            <p>
          We work with educational institutions to help them use
           Technology to make their education programs accessible to people all over the world.
           We improve Accessibility through <b>software</b>, <b>portals</b>, 
             interactive <b>websites</b>, and <b>trainings</b>
          </p>
          </h1>
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

export default Our