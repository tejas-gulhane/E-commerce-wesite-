import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCartHandler = (item) => {
    // find the object in the cartItems array witch is similar to this item
    const isThere = cartItems.find((element) => {
      if (element.id === item.id) return true;
      return false;
    });
    if (isThere) {
      item.quantity += 1;
      setCartItems((olditems) => [...olditems.filter(el => el.id !== item.id), item]);
      // alert("Item is already in the cart");
    } else {
      setCartItems((olditems) => [...olditems, item]);
    }
  };

  const removeItemFromCartHandler = (itemId) => {
    setCartItems((olditems) => olditems.filter((item) => item.id !== itemId));
  };
  const cartContext = {
    items: cartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;