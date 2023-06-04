import React,{useContext} from 'react'
import classes from './MealIteam.module.css';
import MealIteamForm from './MealIteamForm';
import CartContext from '../../store/cart-context';
const MealIteam = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
        console.log(amount);
    }
return <li className={classes.meal}>
    <div><h3>{props.name}</h3></div>
    <div className={classes.description}>{props.description}</div>
    <div className={classes.price}>{price}</div>
    <div>
        <MealIteamForm onAddToCart={addToCartHandler}/>
    </div>
  </li>
}

export default MealIteam