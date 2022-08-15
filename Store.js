import React, { Fragment } from "react";
import classes from "./Store.module.css";
import Button from "../UI/Button";

const productsArr = [
  {
    id: 'p111',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 'p112',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 'p113',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 'p114',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = (props) => {
  const itemList = productsArr.map((item) => {
    return (
      <li className={classes.product} key={item.id}>
        <h1>{item.title}</h1>
        <img src={item.imageUrl} alt={item.title}></img>
        <h2>{item.price}</h2>
        <Button>Add To Cart</Button>
      </li>
    );
  });
  return (
    <Fragment>
      <p className={classes.heading}>The Generics</p>
      <ul>{itemList}</ul>
      <div className={classes.seeCartBtn}>
        <Button>see the cart</Button>
      </div>
    </Fragment>
  );
};

export default Store;