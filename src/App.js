import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import MyCart from "./components/myCart/myCart";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/myCart" component={MyCart} />
      <Route path="/cart" component={Cart} />
      <Footer/>      
    </BrowserRouter>
  );
}

export default App;
