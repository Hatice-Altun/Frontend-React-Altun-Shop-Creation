import React from "react";
import {Routes, Route} from "react-router-dom";
import ShopContextProvider from "./context/Shop-context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/cart/Cart";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
      <div className="App">
        <ShopContextProvider>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
          <Footer/>
        </ShopContextProvider>
      </div>
  );
}

export default App;
