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
      alert("Item is already in the cart");
    } else {
      setCartItems(item);
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