import { Fragment, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";
import Cart from './components/Cart/Cart';



function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartClickHandler = () => {
    setCartIsOpen(true);
  }
  const cartCloseHandler = () => {
    setCartIsOpen(false);
  }
  return (
    <Fragment>
      {cartIsOpen && <Cart onClose={cartCloseHandler}/>}
      <Header onCartClick={cartClickHandler}/>
      <Store />
      <Footer />
    </Fragment>
  );
}

export default App;