import React, { Fragment, useContext} from "react";
import classes from "./Store.module.css";
import CartContext from "../Store/Cart-Context";
import Button from "../UI/Button";

const productsArr = [
  {
    id: 'p111',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
    no:0
  },
  {
    id: 'p112',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
    no:1
  },
  {
    id: 'p113',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
    no:2
  },
  {
    id: 'p114',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
    no:3
  },
];


const Store = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(props);

  const addToCartClickHandler = (event) => {
    const itemId = event.target.no
    console.log(event.target);
    cartCtx.addItem(productsArr[itemId]);
  }

  const itemList = productsArr.map((item) => {
    return (
      <li className={classes.product} key={item.id}>
        <h1>{item.title}</h1>
        <img src={item.imageUrl} alt={item.title}></img>
        <h2>{item.price}</h2>
        <Button id={item.id} onClick={addToCartClickHandler}>Add To Cart</Button>
      </li>
    );
  });

  return (
    <Fragment>
      <p className={classes.heading}>The Generics</p>
      <ul>{itemList}</ul>
      <div className={classes.seeCartBtn}>
        <Button onClick={props.onCartClick}>see the cart</Button>
      </div>
    </Fragment>
  );
};
export default Store;