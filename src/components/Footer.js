import React, { } from 'react';
import { Grid, 
        Box,
        Toolbar } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/assets/logo.svg'
import Linkedin from '../images/icons/linkedin.svg'
import Twitter from '../images/icons/twitter.svg'
import Instagram from '../images/icons/instagram.svg'
import Facebook from '../images/icons/facebook.svg'
// import axios from "axios";
import { useMediaQuery } from 'react-responsive';


const navLinks = [
    { title: "Showcases", link: "/" },
    { title: "Products and Services", link: "/products" },
    { title: "Our Process", link: "/our-process" },
    { title: "Contact Us", link: "/contact" },
  ];

const social = [
    { icon: Linkedin, link: "https://www.linkedin.com/company/omniswift/mycompany/" },
    { icon: Twitter, link: "https://twitter.com/omniswift" },
    { icon: Instagram, link: "https://www.instagram.com/omniswiftltd/" },
    { icon: Facebook, link: "https://web.facebook.com/omniswift?_rdc=1&_rdr" },
  ];




const Footer = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 821px)'});
    // const [isVisible, setIsVisible] = useState(false);


  

  return (
    <div>
        <div className='footer-container'>
            <Toolbar sx={{ paddingTop: '0.5rem'}} id={isMobile && 'float'}>
                <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    {isMobile ? (
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                            <Link>
                            <img src={Logo} style={{ height: isMobile ? '80%' : '100%' }} alt="Logo" />
                            </Link>
                        </div>
                    ) : (
                        <>
                            <Box className='footer-content'>
                        <Grid container style={{ display:'flex', alignItems: 'center'}}>
                          <Grid >
                            <Box item  style={{ width: '50%', display: 'flex', }}>
                                <NavLink to={'/'} className='footer-Logo'>
                                    <img alt="logo" src={Logo} />
                                </NavLink>
                            </Box>
                          </Grid>
                          <Grid item xs={8} md={6} style={{  }}>
                            {navLinks.map (({ title, link}, key) => {
                                return (
                                    <NavLink className='footer-links' activeClassName='active' to={link} key={key}>
                                        {title}
                                    </NavLink>
                                );
                            }
                        )}
                        </Grid>
                            <Grid item xs={4} style={{ transform: 'translateX(-160%)'}}>
                            {social.map(({ link, icon }, key) => {
                                return (
                                    <NavLink className='footer-socials' activeClassName='active' to={link} key={key}>
                                        <img src={icon} alt="img" />
                                    </NavLink>
                                )
                            })}
                            </Grid>
                        

                        <Grid className='copyright' style={{ }}>
                Copyright © {new Date().getFullYear()} - Omniswift Limited, All rights reserved.
                </Grid>
 
                        </Grid>
                        </Box>
                        
                        </>
                    )}
<Grid container className='footer-info-container' style={{  }}>
<Grid   style={{ display: 'flex'  }} >
                    
                    <Link className="privacy-policy" to="/privacy-policy">
                    Privacy Policy
                    </Link>
            {" "}
            
            

       <Grid style={{ display: 'flex' }}>
       
                    <Link className="terms-condition" to="/terms-and-condition">
                        Terms and Conditions 
                    </Link>
            
            </Grid>
    </Grid> 
                

                </Grid>

    
                
                </Grid>
                
            </Toolbar>   

            
                
                

            {/* <div className="footer-info-container">
                    <div className="copyright">
                        Copyright © {new Date().getFullYear()} - Omniswift Limited, All rights reserved.
                    </div>
                    <div className="privacy-terms">
                            <span>
                                <Link className="privacy-policy" to="/privacy-policy">
                                Privacy Policy
                                </Link>
                            </span>{" "}
                            </div>
                            <span>
                                <Link className="terms-condition" to="/terms-and-condition">
                                    Terms and Conditions 
                                </Link>
                            </span>
                    
                    </div>         */}
        </div>

        
        
    </div>
  )
}

export default Footer