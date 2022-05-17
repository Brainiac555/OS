// import React from 'react'
// import classes from '../components/Card.css'

// const card = (props) => {
//   return (
//     
//   )
// }

// export default card
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from '../components/Card'

const card = (props) => {
  return (
   <div className={`${classes.card} ${props.className}`}>{props.children}</div>
   
  )
}

export default card

