import React, {} from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, } from '@mui/material'
import Logo from '../images/assets/logo.svg'
import Linkedin from '../images/icons/linkedin.png'
import Twitter from '../images/icons/twitter.png'
import Instagram from '../images/icons/instagram.png'
import Facebook from '../images/icons/facebook.png'
// import { Menu } from '@mui/icons-material'
// import { Drawer, Grid } from '@material-ui/core'


const Header = () => {

  // const [open, setOpen] = useState(false);

//   const toggleDrawer = () => {
//     setOpen(!open);
// };

//   const links = [
//     { title: "Showcases", link: "/" },
//     { title: "Products and Services", link: "/products" },
//     { title: "Our Process", link: "/our-process" },
//     { title: "Contact Us", link: "/contact" },
// ];

  return (
    <>
      <div className='nave'>
        {/* <Grid container spacing={2}> */}
      <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none'}} position='sticky'>
        <Toolbar sx={{ paddingTop: "0.5rem" }}>
        {/* <Grid container spacing={2}> */}
          <NavLink to={'/'} className="Logo">
          <img src={Logo} alt="logo" style={{ margin: '5% -15%' }} />
          {/* <Menu onClick={() => toggleDrawer()} /> */}
          </NavLink>
            {/* </Grid> */}
            {/* <Grid container spacing={2}> */}
            {/* <div className='nav-link'>
            <Tabs textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example" sx={{ marginLeft: "auto"}}>
                <Tab value="one" label="Showcases" href={'/'}/>
                <Tab value="two" label="Products and Services" href={'/Products'} />
                <Tab value="three" label="Our Process" href={'/our-process'} />
                <Tab value="four" label="Contact Us" href={'/contact'} />
              </Tabs>
            </div> */}

            <nav>
            {/* <img src={Logo} alt="logo" style={{ margin: '5% -15%' }} /> */}
              <ul className='nav__links'>
                <li><a href={'/'}>Showcases</a></li>
                <li><a href={'/products'}>Products and Services</a></li>
                <li><a href={'/our-process'}>Our Process</a></li>
                <li><a href={'/contact'}>Contact Us</a></li>
              </ul>
            </nav>
                {/* </Grid> */}

                {/* <Grid container spacing={2}> */}
                <div className="socials">
        <a href='https://www.linkedin.com/company/omniswift/mycompany/' className='linkedinc-social'><span>
        <img src={Linkedin} alt='linkedin' size="2x" />
        </span>
            </a>
        <a href='https://twitter.com/omniswift' className='Twitter-social'>
            <img src={Twitter} alt='twitter' size="2x"/></a>
        <a href='https://www.instagram.com/omniswiftltd/' className='Instagram-social'>
          <img src={Instagram} alt='instagram' size="2x"/>
          </a>
        <a href='https://web.facebook.com/omniswift?_rdc=1&_rdr' className='Twitter social'><img src={Facebook} alt='facebook' size="2x" />
            </a>
            </div> 
            {/* </Grid> */}


        </Toolbar>
        {/* <Drawer className='drawer'  anchor='left' open={open} onClose={() => toggleDrawer()}> */}

        {/* </Drawer> */}

      </AppBar>
      </div>
      
      </>
  )
}

export default Header