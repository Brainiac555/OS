import React from 'react'
import styled from 'styled-components';
import products from '../images/assets/Products.png';
import PageLayout from '../components/PageLayout';

const Products = () => {
  return (
  <div>
    <PageLayout>
    <Section className='service-section'>
      <div className='service-background'>
        <img src={products} alt="Products" />
        </div>
        <div className='service-body-section'>
            <h1 style={{
                fontSize: "20px",
                width:"100%",
                textAlign: "left",
                fontWeight: "200",}}>
              <span style={{ fontSize: '70px', fontWeight: 'bold' }}>Products <br/> and Services</span>
              <p>Here you need to add some new text related to the services provided<br /> 
              by the company. Lorem Ipsum is simply dummy text of the printing<br /> 
              and typesetting industry. Lorem Ipsum has been the industry's<br /> 
              standard dummy text ever since the 1500s, when an unknown printer<br /> 
              took a galley of type..</p>
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
export default Products