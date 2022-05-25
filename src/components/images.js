// import img1 from '../images/assets/1.jpg';
// import img2 from '../images/assets/2.jpg';
// import React from 'react';



// export default [img1, img2];

import React from 'react';
import img1 from '../images/assets/1.jpg';
import rect from'../images/assets/rectangle.png';
import user from '../images/assets/User with Desktop.jpg';
import img2 from '../images/assets/2.jpg';
import img3 from '../images/assets/complete.jpg';
import { Link } from "react-router-dom";

const images = [{
   header: 'First Impression Matters',
   body: 'We can help you convert more prospects into leads and customers through our process.',
   image: img1,
   link: '../pages/Contact.js'
},
{
   header: 'First Impression Matters',
   body: 'We can help you convert more prospects into leads and customers through our process.',
   image: img2,
   link: '../pages/Contact.js',
},
{
   header: 'First Impression Matters',
   body: 'We can help you convert more prospects into leads and customers through our process.',
   image: img3,
   link: '../pages/Contact.js'
},
];

export default images