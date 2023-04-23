import CartIcon from "../Cart/CartIcon";
import classes from  './HeaderCartButton.module.css';
import { useContext } from "react";
import CartContext from "../../store/cart-context";



const HeadeCartButton = props=>{

const cartCtx = useContext(CartContext);


const numberOfCardItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber+item.amount;
},0);



return<button className= {classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCardItems}</span>
</button>
};
export default HeadeCartButton;