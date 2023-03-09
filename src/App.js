import Login from "./pages/loginPage";
import Products from "./pages/products";
import ProductsAdmin from "./pages/productAdmin";
import ProductDetail from "./pages/productDetail";
import Home from "./pages/home";
import Register from "./pages/register";
import HomeAdmin from "./pages/homeAdmin";
import AddProducts from "./pages/addProducts";
import EditProducts from "./pages/editProducts";

import configureStore from "./redux/store";

import { Provider } from "react-redux";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const { store } = configureStore();
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productsAdmin" element={<ProductsAdmin />} />
            <Route path="/addProducts" element={<AddProducts />} />
            <Route path="/editProducts/:id" element={<EditProducts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
