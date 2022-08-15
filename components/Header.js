import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from './Header.module.css';
const Header = props => {
    return (
    <Fragment>
        <div className={classes.banner}>
            <div>Home</div>
            <div>Store</div>
            <div>About</div>
            <div className={classes.cartCase}>
            <div><Button>Cart</Button></div>
            <div>0</div>
            </div>
        </div>
    </Fragment>)
}

export default Header;