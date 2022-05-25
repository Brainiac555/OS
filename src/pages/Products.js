import React from 'react'
import styled from 'styled-components';
import products from '../images/assets/Products.png';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card'

const Products = () => {
  return (
  <div>
    <PageLayout>
    <Section className='service-section'>
      <div className='service-background'>
        <img src={products} alt="Products" />
        </div>
        <div className='service-body-section' >
            <h1><span className='servicebody'>Products <br/> and Services</span></h1>
            </div>
            <div className='service-intro2'>
              <p>Here you need to add some new text related to the services provided<br /> 
              by the company. Lorem Ipsum is simply dummy text of the printing<br /> 
              and typesetting industry. Lorem Ipsum has been the industry's<br /> 
              standard dummy text ever since the 1500s, when an unknown printer<br /> 
              took a galley of type..</p>
              
              <Card className='prod'>
                {/* <h1>Welcome</h1> */}
              </Card>
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