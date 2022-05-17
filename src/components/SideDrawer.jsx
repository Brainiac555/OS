import React, { useState} from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import Linkedin from '../images/icons/linkedin.svg';
import Twitter from '../images/icons/twitter.svg';
import Instagram from '../images/icons/instagram.svg';
import Facebook from '../images/icons/facebook.svg';


const SideDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const social = [
    { icon: Linkedin, link: 'https://www.linkedin.com/company/omniswift/mycompany/' },
    { icon: Twitter, link: 'https://twitter.com/omniswift' },
    { icon: Instagram, link: 'https://www.instagram.com/omniswiftltd/' },
    { icon: Facebook, link: 'https://web.facebook.com/omniswift?_rdc=1&_rdr' },
  ];

   
  return (
    <Drawer
    anchor="right"
    onClose={() => setOpenDrawer(false)} open={openDrawer}
    >
      <List>
        <ListItem divider button>
          <ListItemIcon>
            <ListItemText>Showcases</ListItemText>
            </ListItemIcon>
           </ListItem>
           
           <ListItem divider button>
          <ListItemIcon>
            <ListItemText>Products and Services</ListItemText>
            </ListItemIcon>
           </ListItem>

           <ListItem divider button>
          <ListItemIcon>
            <ListItemText>Our Process</ListItemText>
            </ListItemIcon>
           </ListItem>

           <ListItem divider button>
          <ListItemIcon>
            <ListItemText>Contact Us</ListItemText>
            </ListItemIcon>
           </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer