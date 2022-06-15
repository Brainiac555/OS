import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, 
         Box, 
         Drawer,
         Toolbar, 
         List,
         ListItem,
         ListItemText,
         Menu, 
         IconButton, 
          } from '@mui/material';
import Logo from '../images/assets/logo.svg';
import Linkedin from '../images/icons/linkedin.svg';
import Twitter from '../images/icons/twitter.svg';
import Instagram from '../images/icons/instagram.svg';
import Facebook from '../images/icons/facebook.svg';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion'


const Header = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [open, setOpen] = useState(false);

  const links = [
    { title: 'Showcases', link: '/'},
    { title: 'Products and Services', link: '/products'},
    { title: 'Our Process', link: '/our-process'},
    { title: 'Contact Us', link: '/contact'},
  ];

  const social = [
    { icon: Linkedin, link: 'https://www.linkedin.com/company/omniswift/mycompany/' },
    { icon: Twitter, link: 'https://twitter.com/omniswift' },
    { icon: Instagram, link: 'https://www.instagram.com/omniswiftltd/' },
    { icon: Facebook, link: 'https://web.facebook.com/omniswift?_rdc=1&_rdr' },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  }


  return (
    <div>
      <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Toolbar sx={{ paddingTop: "0.5rem" }}>
        <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
          {isMobile ? (
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
            <Link>
            <img src={Logo} style={{ height: isMobile ? '80%' : '100%' }} alt="Logo" />
            </Link>
            <Menu open={open} onClick={() => toggleDrawer()} style={{ color: 'white', fontSize: 20 }}/>
            </div>

  ) : (
    <>
        <motion.div className='nav-content' animate={{ x:10}}>
      <Grid container style={{display: 'flex',  alignItems: 'center',  }}>
        <Grid item xs={2}>
          <div style={{ width: '50%', display: 'flex', }}>
          <NavLink to={'/'} className="Logo">
          <img src={Logo} alt="logo"  />
         
          </NavLink>
          </div>
        </Grid>
        <Grid item xs={6} style={{ margin: '0 180px', }} >
          {links.map(
            ({ link, title }, key) => {
              return (
                <NavLink className='nav__links' activeclassname='active' to={link} key={key}>
                  {title}
                </NavLink>
              );
            }
          )}
          <Grid item xs={6} style={{  transform: 'translateX(180%)'}}>
            {social.map(({ link, icon }, key) => {
                return (
                  <NavLink className='social' activeclassname='active' to={link} key={key}>
                  <img src={icon} alt="img" />
                  </NavLink>
                )
              }
            )}
          </Grid>
            </Grid>
            
      </Grid>
      </motion.div>
    </>
    )}
    </Grid>
  </Toolbar>
  <Drawer className='drawer' anchor='right' open={open} onClose={() => toggleDrawer()}>
      <div role='presentation'>
            <div style={{ Width: '100%', height: '100vh'}}>
            <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2% 4%'}}>
              <Grid item xs={6}>
                  <img src={Logo} alt="logo" style={{ height: '70% '}} />
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <IconButton onClick={() => toggleDrawer()} style={{ fontSize: 45, color: 'white' }} />
              </Grid>
              </Grid>

              <List style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20%'}}>
                {links.map(({ title, link }, key) => (
                  <NavLink onClick={() => toggleDrawer()} to={link} key={key} activeclassname='active' className='mobile-header'>
                    <ListItem>
                      <ListItemText primary={title} />
                    </ListItem>
                  </NavLink>
                ))}
              </List>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginLeft: '1.8rem'}}>
                  {social.map(({ link, icon }, key) => {
                    return (
                      <Link onClick={() => toggleDrawer()} className='nav__link' to={link} key={key}>
                      <img src={icon} alt="img" />
                      </Link>
                    );
                  })}
              </Grid>
            </div>
      </div>
      </Drawer>
      
    </AppBar>
    {/* <SideDrawer/> */}
  </div>
 );
};

export default Header