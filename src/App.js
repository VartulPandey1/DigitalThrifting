import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import LikedItem from "./Components/LikedItem";
import NavBar from "./Components/NavBar";
import NewsLetter from "./Components/NewsLetter";
import ProductDetail from "./Components/ProductDetail";
import SingleProductList from "./Components/SingleProductList";
import TopOffer from "./Components/TopOffer";
import store from "./utils/Store";

const App = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <TopOffer />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductList />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/liked" element={<LikedItem/>}/>
        </Routes>
        <NewsLetter />
        <Footer/>
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
