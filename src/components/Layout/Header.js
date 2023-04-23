import { Fragment } from "react";
import HeadeCartButton from "./HeaderCartButtorn";

import mealsImage from '../assets/meals.jpeg'
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeadeCartButton onClick ={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Your good food"></img>
        {/* <img src="https://cdn.ning.com/wp-content/uploads/2019/05/create-food-website.jpg" alt="A table ful of delisious food" /> */}
      </div>
    </Fragment>
  );
};
export default Header;
