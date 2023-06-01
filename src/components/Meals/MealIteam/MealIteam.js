import React from 'react'
import classes from './MealIteam.module.css';
const MealIteam = (props) => {
    const price = `$${props.price.toFixed(2)}`;
return <li className={classes.meal}>
    <div><h3>{props.name}</h3></div>
    <div className={classes.description}>{props.description}</div>
    <div className={classes.price}>{price}</div>
    <div></div>
  </li>
}

export default MealIteam